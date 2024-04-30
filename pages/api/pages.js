import { PARAMS_PAGE } from '../../lib/constants';
import { isMultiLanguage } from '../../lib/isMultiLanguage';
import {
	getCurrentLocaleStore,
	globalDrupalStateStores,
} from '../../lib/stores';
export async function getPagesApi({ context, alias }) {
	const params = PARAMS_PAGE;
	const { locales, locale } = context;
	const lang = context.preview ? context.previewData.previewLang : locale;

	const multiLanguage = isMultiLanguage(context.locales);
	const store = getCurrentLocaleStore(lang, globalDrupalStateStores);
	const origin = process.env.NEXT_PUBLIC_FRONTEND_URL;

	let page;
	try {
		page = await store.getObjectByPath({
			objectName: 'node--page',
			// note: pages are not prefixed by default.
			path: `${multiLanguage ? lang : ''}${alias}`,
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
			path: `${multiLanguage ? lang : ''}/pages${alias}`,
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
		params: 'include=field_footer_logo.field_media_image',
	});

	const isiContent = await store.getObject({
		objectName: 'block_content--basic',
		refresh: true,
		res: context.res,
		anon: true,
		params: 'include=field_isi_icon.field_media_image',
	});
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

	const hrefLang = await Promise.all(paths).then((values) => {
		return values.map((value) => {
			return {
				hrefLang: value.langcode,
				href: origin + '/' + value.langcode + value.alias,
			};
		});
	});
	return {
		page,
		mainMenu,
		footerMenu,
		footerContent,
		isiContent,
		hrefLang,
	};
}
