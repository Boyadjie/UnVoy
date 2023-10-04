import {render, screen} from '@testing-library/react';

import {Title} from '../src/components/title';

describe('<Title />', () => {
	it('Loads and display the atom "Title"', () => {
		render(<Title />);

		const title = screen.getByRole('heading');

		expect(title.textContent).toEqual('This is a title');
	});
});
