import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable import/no-extraneous-dependencies */

import MenuContainer from './menu-container';

storiesOf('Molecules/Menu Container', module)
	.add('simple input', () => (
		<MenuContainer
			dismiss={action('dismiss-menu')}
			links={[
				{
					key: 'skin-care',
					text: 'Skin Care Education',
					subLinks: [
						{
							key: 'beauty',
							text: 'Beauty',
							to: '/test',
							subLinks: [
								{
									key: 'something',
									text: 'something else',
									to: '/asdf'
								}
							]
						},
						{
							key: 'wellness',
							to: '/skin-care-education/wellness',
							text: 'Welness'
						}
					]
				},
				{
					key: 'wellness',
					text: 'Welness',
					to: '/something'
				}
			]}
		/>
	));
