import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ListGroup from './list-group';

storiesOf('Organism/ListGroup', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add(
		'without children',
		withInfo(`
			App Bar without any children, used when user is logged in.
		`)(() => {
			const defaultItem = {
				title: text('Title', 'Some Title Goes here'),
				children: 'testerooo',
				type: select('background', ['white', 'gray', 'secondary', 'primary', 'tertiary', 'transparent'], 'transparent')
			};

			return (
				<ListGroup
					listItems={[
						defaultItem, defaultItem, defaultItem, defaultItem
					]}
				/>
			);
		})
	);
