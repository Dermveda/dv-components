import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Footer from './footer';

storiesOf('Organism/Footer', module)
	.add('success newsletter', () => {
		const submitNewsletter = x => new Promise(resolve =>
			setTimeout(() => resolve(action('submitted newsletter')(x)), 1000)
		);

		return (
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
							{ to: '/our-story', text: 'Our Story' },
							{ href: 'http://google.com', text: 'External About' }
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
					onSubmit: submitNewsletter,
					isPromise: true,
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
				renderLegal={() => (
					<p>
						All material on this website is protected by copyright, Copyright 2018 by Dermveda Inc. This website also contains material copyrighted by 3rd parties.
					</p>
				)}
			/>
		);
	})
	.add('error newsletter', () => {
		const submitNewsletter = x => new Promise((resolve, reject) =>
			setTimeout(() => reject(action('error newsletter')(x)), 1000)
		);

		return (
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
					onSubmit: submitNewsletter,
					isPromise: true,
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
				renderLegal={() => (
					<p>
						All material on this website is protected by copyright, Copyright 2018 by Dermveda Inc. This website also contains material copyrighted by 3rd parties.
					</p>
				)}
			/>
		);
	})
	.add('no promise', () => (
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
				onSubmit: action('submitted newsletter'),
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
				},
				loading: boolean('loading', true),
				success: boolean('success', true)
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
			renderLegal={() => (
				<p>
					All material on this website is protected by copyright, Copyright 2018 by Dermveda Inc. This website also contains material copyrighted by 3rd parties.
				</p>
			)}
		/>
	));
