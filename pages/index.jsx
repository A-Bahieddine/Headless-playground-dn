import { NextSeo } from 'next-seo';
import { getPreview } from '../lib/getPreview';
import { isMultiLanguage } from '../lib/isMultiLanguage';
import { getCurrentLocaleStore, globalDrupalStateStores } from '../lib/stores';
import { PARAMS_PAGE, FRONT_PATH } from '../lib/constants';
import Layout from '../components/layout';
import RenderComponents from '../components/render-components/render-components';
export default function PageTemplate({ page, mainMenu,footerMenu,footerContent, hrefLang, preview }) {
	
	const components = page.field_components;
	function buildMenuHierarchy(menuItems) {
		// This function converts the flat list into a tree structure based on the 'parent' attribute.
		let menuTree = [];
		let menuMap = {};

		// First, transform the list into a map for easy lookup.
		menuItems?.forEach((item) => {
			menuMap[item.id] = { ...item, children: [] };
		});

		// Then, build the tree by adding children to their respective parents.
		menuItems?.forEach((item) => {
			if (item.parent) {
				// The parent ID is not empty, add this item to its parent's 'children' array.
				if (menuMap[item.parent]) {
					menuMap[item.parent].children.push(menuMap[item.id]);
				}
			} else {
				// This is a root item (no parent).
				menuTree.push(menuMap[item.id]);
			}
		});

		return menuTree;
	}
	buildMenuHierarchy(mainMenu);
	return (
		<Layout preview={preview} mainMenu={mainMenu} footerMenu={footerMenu}>
			<NextSeo
				title="Decoupled Next Drupal Demo"
				description="Generated by create-pantheon-decoupled-kit."
				languageAlternates={hrefLang}
			/>
			<RenderComponents components={components} />
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { locales, locale } = context;
	const multiLanguage = isMultiLanguage(context.locales);
	const lang = context.preview ? context.previewData.previewLang : locale;
	const store = getCurrentLocaleStore(lang, globalDrupalStateStores);

	// handle nested alias like /pages/featured
	const pageID = FRONT_PATH;
	const params = PARAMS_PAGE;
	const previewParams =
		context.preview && (await getPreview(context, 'node--page', params));

	if (previewParams?.error) {
		return {
			redirect: {
				destination: previewParams.redirect,
				permanent: false,
			},
		};
	}

	let page;
	try {
		page = await store.getObjectByPath({
			objectName: 'node--page',
			// note: pages are not prefixed by default.
			path: `${multiLanguage ? lang : ''}${pageID}`,
			params: context.preview ? previewParams : params,
			refresh: true,
			res: context.res,
			anon: context.preview ? false : true,
		});
	} catch (error) {
		// retry the fetch with `/pages` prefix
		page = await store.getObjectByPath({
			objectName: 'node--page',
			// note: pages are not prefixed by default.
			path: `${multiLanguage ? lang : ''}/pages${pageID}`,
			params: context.preview ? previewParams : params,
			refresh: true,
			res: context.res,
			anon: context.preview ? false : true,
		});
	}

	const mainMenu = await store.getObject({
		objectName: 'menu_items--main',
		refresh: true,
		res: context.res,
		anon: true,
	});
	const footerMenu = await store.getObject({
		objectName: 'menu_items--footer',
		refresh: true,
		res: context.res,
		anon: true,
	});
	const footerContent = await store.getObject({
		objectName: 'block_content--footer',
		refresh: true,
		res: context.res,
		anon: true,
	});
	console.log(footerContent,'s')
	const origin = process.env.NEXT_PUBLIC_FRONTEND_URL;
	// Load all the paths for the current page content type.
	const paths = locales.map(async (locale) => {
		const storeByLocales = getCurrentLocaleStore(
			locale,
			globalDrupalStateStores,
		);
		const { path } = await storeByLocales.getObject({
			objectName: 'node--page',
			id: page.id,
			params: context.preview && previewParams,
			refresh: true,
			res: context.res,
			anon: context.preview ? false : true,
		});
		return path;
	});

	// Resolve all promises returned as part of paths
	// and prepare hrefLang.
	const hrefLang = await Promise.all(paths).then((values) => {
		return values.map((value) => {
			return {
				hrefLang: value.langcode,
				href: origin + '/' + value.langcode + value.pageID,
			};
		});
	});
	return {
		props: {
			page,
			mainMenu,
			footerMenu,
			footerContent,
			hrefLang,
			preview: Boolean(context.preview),
		},
	};
}
