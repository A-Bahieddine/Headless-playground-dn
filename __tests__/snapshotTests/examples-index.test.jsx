import { render } from '@testing-library/react';
import ExamplesPageTemplate from '../../pages/examples/index';

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

describe(`Umami <ExamplesPageTemplate />`, () => {
	it(`should render`, () => {
		const data = { mainMenu: umamimainMenu };

		const { asFragment } = render(
			<ExamplesPageTemplate mainMenu={data.mainMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
