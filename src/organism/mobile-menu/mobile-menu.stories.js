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
					link: '/courses',
					text: 'Courses'
				},
				{
					link: '/how-it-works',
					text: 'How It Works'
				},
				{
					link: '/about-us',
					text: 'About Us'
				},
				{
					link: '/contact-us',
					text: 'Contact Us'
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
