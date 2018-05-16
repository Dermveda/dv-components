import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Icon from './icons';
import IconCircle from './icon-circle';
import { icons } from './icon-names';

storiesOf('Atoms/Icon', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add(
		'with text',
		withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
            import { Button } from 'dv-component-library/atoms';

            <Button>I'm a simple button!</Button>
            ~~~
        `)(() => (
			<Icon
				name={select('icons', Object.keys(icons), 'rightArrow')}
				type={select('type', ['glyph', 'outline', 'colored'], 'glyph')}
				strokeSize={select('stroke', [1, 2, 3, 4], 2)}
				iconSize={select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'md')}
				description={text('description', 'svg descriptoin')}
				title={text('title', 'svg title')}
			/>
		))
	)
	.add('with circle', () => (
		<IconCircle
			name={select('icons', Object.keys(icons), 'rightArrow')}
			type={select('type', ['glyph', 'outline', 'colored'], 'glyph')}
			strokeSize={select('stroke', [1, 2, 3, 4], 2)}
			iconSize={select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'md')}
			description={text('description', 'svg descriptoin')}
			title={text('title', 'svg title')}
		/>
	));
