import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import MobileMenu from './mobile-menu';

storiesOf('Organism/Mobile Menu', module)
	.add('simple input', () => (
		<MobileMenu
			drawerLinks={[
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
			appBarLinkLeft={{
				icon: 'award',
				text: 'Courses',
				link: '/courses'
			}}
			appBarLinkRight={{
				icon: 'award',
				text: 'Account',
				link: '/sign-up'
			}}
			showCallToAction
			callToAction={{
				link: '/sign-up',
				text: 'Start Earning Credits'
			}}
		/>
	));
