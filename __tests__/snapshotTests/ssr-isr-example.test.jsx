import { render } from '@testing-library/react';
import SSGISRExampleTemplate from '../../pages/examples/ssg-isr';

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

describe('<SSGISRExampleTemplate />', () => {
	it(`should render articles`, () => {
		const data = { articles: umamiEnArticlesData, mainMenu: umamimainMenu };

		const { asFragment } = render(
			<SSGISRExampleTemplate
				articles={data.articles}
				mainMenu={data.mainMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
