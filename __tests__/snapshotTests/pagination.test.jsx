import { render } from '@testing-library/react';
import PaginationExampleTemplate from '../../pages/examples/pagination/[[...page]]';

import examplePaginationData from '../data/examplePaginationData.json';
import umamimainMenu from '../data/umamiMenuItemsMainData.json';

vi.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'en',
		pathname: 'test/path',
		push: vi.fn(),
		query: {
			page: '/examples/pagination/[[...page]]',
		},
	}),
}));
/**
 * @vitest-environment jsdom
 */

describe('<PaginationExampleTemplate />', () => {
	const mainMenu = umamimainMenu;
	it('should render the Pagination Example page', () => {
		const { asFragment } = render(
			<PaginationExampleTemplate
				mainMenu={mainMenu}
				data={examplePaginationData}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
