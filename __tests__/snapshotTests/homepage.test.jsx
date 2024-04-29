import { render } from '@testing-library/react';
import HomepageTemplate from '../../pages/index';

import umamiEnArticlesData from '../data/umamiEnArticlesData.json';
import umamimainMenu from '../data/umamiMenuItemsMainData.json';

vi.mock('next/image');

/**
 * @vitest-environment jsdom
 */

describe('<HomepageTemplate />', () => {
	it(`should render articles`, () => {
		const data = { articles: umamiEnArticlesData, mainMenu: umamimainMenu };

		const { asFragment } = render(
			<HomepageTemplate
				sortedArticles={data.articles}
				mainMenu={data.mainMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
