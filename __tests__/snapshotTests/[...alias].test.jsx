import { render } from '@testing-library/react';
import CatchAllRoute from '../../pages/[...alias]';

import topLevelArticleData from '../data/topLevelArticleData.json';
import topLevelPageData from '../data/topLevelPageData.json';
import topLevelRecipeData from '../data/topLevelRecipeData.json';

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

describe('<CatchAllRoute />', () => {
	const mainMenu = umamimainMenu;
	it(`should render an article`, () => {
		const data = { pageData: topLevelArticleData, mainMenu: mainMenu };

		const { asFragment } = render(
			<CatchAllRoute pageData={data.pageData} mainMenu={data.mainMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
	it(`should render a page`, () => {
		const data = { pageData: topLevelPageData, mainMenu: mainMenu };

		const { asFragment } = render(
			<CatchAllRoute pageData={data.pageData} mainMenu={data.mainMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it(`should render a recipe`, () => {
		const data = { pageData: topLevelRecipeData, mainMenu: mainMenu };

		const { asFragment } = render(
			<CatchAllRoute pageData={data.pageData} mainMenu={data.mainMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
