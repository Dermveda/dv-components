import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { Button, MenuButtons } from 'atoms';
import MenuBar from './menu-bar';

storiesOf('Molecules/Desktop Menu', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add(
		'without children',
		withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
            import { Button } from 'dv-component-library/atoms';

            <Button>I'm a simple button!</Button>
            ~~~
        `)(() => (
			<MenuBar
				title="LearnSkin"
				sourceAttributes={[
					{
						srcset: 'http://fillmurray.com/48/48',
						media: '(max-width: 1200px)'
					},
					{
						srcset: 'http://fillmurray.com/150/32'
					}
				]}
				imageAttributes={{
					src: 'http://fillmurray.com/150/32'
				}}
				menuLinks={object('menu links', [
					{ href: '/courses', text: 'Courses' },
					{ href: '/how-it-works', text: 'How It Works' },
					{ href: '/about-us', text: 'About Us' },
					{ href: '/contact-us', text: 'Contact Us' }
				])}
			/>
		))
	)
	.add(
		'with button links',
		withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
            import { Button } from 'dv-component-library/atoms';

            <Button>I'm a simple button!</Button>
            ~~~
        `)(() => (
			<MenuBar
				title="LearnSkin"
				sourceAttributes={[
					{
						srcset: 'http://fillmurray.com/48/48',
						media: '(max-width: 1200px)'
					},
					{
						srcset: 'http://fillmurray.com/150/32'
					}
				]}
				imageAttributes={{
					src: 'http://fillmurray.com/150/32'
				}}
				menuLinks={object('menu links', [
					{ href: '/courses', text: 'Courses' },
					{ href: '/how-it-works', text: 'How It Works' },
					{ href: '/about-us', text: 'About Us' },
					{ href: '/contact-us', text: 'Contact Us' }
				])}
			>
				<MenuButtons>
					<Button
						onClick={action('clicked primary')}
						type="tertiary"
						outline
						small
					>
						Try it Free
					</Button>
					<Button
						onClick={action('clicked secondary')}
						type="secondary"
						outline
						small
					>
						Sign In
					</Button>
				</MenuButtons>
			</MenuBar>
		))
	)
	.add(
		'with icon links',
		withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
            import { Button } from 'dv-component-library/atoms';

            <Button>I'm a simple button!</Button>
            ~~~
        `)(() => (
			<MenuBar
				title="LearnSkin"
				sourceAttributes={[
					{
						srcset: 'http://fillmurray.com/48/48',
						media: '(max-width: 1200px)'
					},
					{
						srcset: 'http://fillmurray.com/150/32'
					}
				]}
				imageAttributes={{
					src: 'http://fillmurray.com/150/32'
				}}
				menuLinks={object('menu links', [
					{ href: '/courses', text: 'Courses' },
					{ href: '/how-it-works', text: 'How It Works' },
					{ href: '/about-us', text: 'About Us' },
					{ href: '/contact-us', text: 'Contact Us' }
				])}
			/>
		))
	);
