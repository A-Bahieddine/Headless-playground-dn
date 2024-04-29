import { render } from '@testing-library/react';
import SSRArticlesListTemplate from '../../pages/articles/index';
import ArticleTemplate from '../../pages/articles/[...slug]';

import defaultProfileArticlesData from '../data/defaultProfileArticlesData.json';
import defaultProfilemainMenu from '../data/defaultProfileMenuItemsMainData.json';
import umamiEnArticlesData from '../data/umamiEnArticlesData.json';
import umamimainMenu from '../data/umamiMenuItemsMainData.json';

vi.mock('next/image');
vi.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'en',
	}),
}));

/**
 * @vitest-environment jsdom
 */

describe('<SSRArticlesListTemplate />', () => {
	it(`should render articles`, () => {
		const data = { articles: umamiEnArticlesData, mainMenu: umamimainMenu };

		const { asFragment } = render(
			<SSRArticlesListTemplate
				sortedArticles={data.articles}
				mainMenu={data.mainMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
describe('<ArticleTemplate />', () => {
	it(`should render articles`, () => {
		const data = {
			article: umamiEnArticlesData[0],
			mainMenu: umamimainMenu,
		};

		const { asFragment } = render(
			<ArticleTemplate article={data.article} mainMenu={data.mainMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
