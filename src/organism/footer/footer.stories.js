import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Footer from './footer';

storiesOf('Organism/Footer', module)
	.add('simple input', () => (
		<Footer
			imageAttributes={{
				src: 'http://fillmurray.com/80/80',
				alt: 'LearnSkin'
			}}
			footerLinks={[
				{
					title: 'About Us',
					links: [
						{ to: '/our-story', text: 'Our Story' },
						{ to: '/our-team', text: 'Meet The Team' },
						{ to: '/our-story', text: 'Our Story' }
					]
				},
				{
					title: 'How It Works',
					links: [
						{ to: '/our-story', text: 'Our Story' },
						{ to: '/our-team', text: 'Meet The Team' },
						{ to: '/our-story', text: 'Our Story' },
						{ to: '/our-story', text: 'Our Story' }
					]
				},
				{
					title: 'Course Providers',
					links: [
						{ to: '/our-story', text: 'Our Story' },
						{ to: '/our-team', text: 'Meet The Team' }
					]
				},
				{
					title: 'Resources',
					links: [
						{ to: '/our-story', text: 'Our Story' },
						{ to: '/our-team', text: 'Meet The Team' },
						{ to: '/our-story', text: 'Our Story' },
						{ to: '/our-story', text: 'Our Story' }
					]
				}
			]}
			newsLetter={{
				onSubmit: action('submit newsletter'),
				title: 'Stay In Touch',
				message: 'Join our monthly newsletter to get updates about LearnSkin and hear about new courses!',
				buttonAttributes: {
					text: 'Join Newsletter',
					outline: true,
					type: 'primary',
					small: true
				},
				inputAttributes: {
					type: 'email',
					name: 'email',
					required: true
				}
			}}
			social={[
				{
					name: 'twitter',
					text: 'Follow us on Twitter',
					href: 'http://google.com',
				},
				{
					name: 'facebook',
					text: 'Follow us on Twitter',
					href: 'http://google.com',
				},
				{
					name: 'youtube',
					text: 'Follow us on Twitter',
					href: 'http://google.com',
				},
				{
					name: 'instagram',
					text: 'Follow us on Twitter',
					href: 'http://google.com',
				}
			]}
			legal="All material on this website is protected by copyright, Copyright 2018 by Dermveda Inc. This website also contains material copyrighted by 3rd parties."
		/>
	));
