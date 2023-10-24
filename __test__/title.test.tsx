import {render, screen} from '@testing-library/react';

import {Title} from '../src/components/blocs/withText/Title';

it('Loads and display the atom "Title"', () => {
	render(<Title>This is a title</Title>);

	const title = screen.getByRole('heading');

	expect(title.textContent).toEqual('This is a title');
});
