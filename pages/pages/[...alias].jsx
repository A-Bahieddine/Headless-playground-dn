import { NextSeo } from 'next-seo';
import { getPreview } from '../../lib/getPreview';
import RenderComponents from '../../components/render-components/render-components';
import Layout from '../../components/layout';
import { getPagesApi } from '../api/pages';
export default function PageTemplate({
	page,
	mainMenu,
	footerMenu,
	footerContent,
	hrefLang,
	preview,
}) {
	const components = page.field_components;
	return (
		<Layout
			preview={preview}
			mainMenu={mainMenu}
			footerContent={footerContent}
			footerMenu={footerMenu}
		>
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
	const alias = `${context.params.alias
		.map((segment) => `/${segment}`)
		.join('')}`;
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
