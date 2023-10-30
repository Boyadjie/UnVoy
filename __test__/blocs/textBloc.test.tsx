import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import {TextBloc} from '../../src/components/blocs/withText/TextBloc';

describe('<TextBloc />', () => {
	it('should loads and display a single paragraph', () => {
		render(<TextBloc content="This is a text paragraph" />);

		const paragraph = screen.getByText('This is a text paragraph');

		expect(paragraph).toBeVisible();
	});

	it('should Loads and display 3 paragraphs', () => {
		render(
			<TextBloc
				content={['first paragraph', 'second paragraph', 'third paragraph']}
			/>,
		);

		const paragraphList = screen.getAllByText(/\w+ +paragraph/i);

		expect(paragraphList.length).toEqual(3);
		paragraphList.map((paragraph) => {
			expect(paragraph).toBeVisible();
		});
	});
});
