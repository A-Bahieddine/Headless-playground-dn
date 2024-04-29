import { render } from '@testing-library/react';
import PageListTemplate from '../../pages/pages';
import PageTemplate from '../../pages/pages/[...alias]';

import umamiEnPagesData from '../data/umamiEnPagesData.json';
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

describe('<PageListTemplate />', () => {
	it(`should render pages`, () => {
		const data = { pages: umamiEnPagesData, mainMenu: umamimainMenu };

		const { asFragment } = render(
			<PageListTemplate
				sortedPages={data.pages}
				mainMenu={data.mainMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
describe('<PageTemplate />', () => {
	it(`should render page`, () => {
		const data = { page: umamiEnPagesData[0], mainMenu: umamimainMenu };

		const { asFragment } = render(
			<PageTemplate page={data.page} mainMenu={data.mainMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
