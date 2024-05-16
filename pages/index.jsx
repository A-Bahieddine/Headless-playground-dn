import { NextSeo } from 'next-seo';
import { getPreview } from '../lib/getPreview';
import { FRONT_PATH } from '../lib/constants';
import Layout from '../components/layout';
import RenderComponents from '../components/render-components/render-components';
import { getPagesApi } from './api/pages';
import Script from 'next/script';
export default function PageTemplate({
	page,
	mainMenu,
	topMenu,
	footerMenu,
	footerContent,
	isiContent,
	hrefLang,
	preview,
}) {
	const components = page.field_components;
	return (
		<Layout
			preview={preview}
			mainMenu={mainMenu}
			topMenu={topMenu}
			footerContent={footerContent}
			footerMenu={footerMenu}
			isiContent={isiContent}
		>
			<NextSeo
				title="Decoupled Next Drupal Demo"
				description="Generated by create-pantheon-decoupled-kit."
				languageAlternates={hrefLang}
			/>
			{/* <RenderComponents components={components} /> */}
			<Script src="/js/bootstrap.bundle.min.js"></Script>
			<Script src="/js/lottie js/lottie-animation.js"></Script>
			<Script src="/js/main.js"></Script>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const alias = FRONT_PATH;
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
	const props = await getPagesApi({ context, alias });
	return {
		props: {
			...props,
			preview: Boolean(context.preview),
		},
	};
}
