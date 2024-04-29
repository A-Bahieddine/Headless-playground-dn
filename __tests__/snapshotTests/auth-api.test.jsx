import { render } from '@testing-library/react';
import AuthApiExampleTemplate from '../../pages/examples/auth-api';

import defaultProfileArticlesData from '../data/defaultProfileArticlesData.json';
import umamimainMenu from '../data/umamiMenuItemsMainData.json';

/**
 * @vitest-environment jsdom
 */

describe('<AuthApiExampleTemplate />', () => {
	const mainMenu = umamimainMenu;
	it('should render a success message if authenticated', () => {
		const { asFragment } = render(
			<AuthApiExampleTemplate
				mainMenu={mainMenu}
				// using default articles for both profiles as the content
				// does not matter here.
				articles={defaultProfileArticlesData}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
	it('should render a failure message if unauthenticated', () => {
		const { asFragment } = render(
			<AuthApiExampleTemplate mainMenu={mainMenu} articles={[]} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
