// import React from 'react';
//
// /* eslint-disable import/no-extraneous-dependencies */
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { withInfo } from '@storybook/addon-info';
// import { object } from '@storybook/addon-knobs/react';
// import StoryRouter from 'storybook-react-router';
// /* eslint-enable import/no-extraneous-dependencies */
//
// import { Button, MenuButtons } from 'atoms';
// import MenuBar from './menu-bar';
//
// storiesOf('Molecules/Desktop Menu', module)
// 	.addDecorator(StoryRouter())
// 	.add(
// 		'without children',
// 		withInfo(`
//             ## About
//             A simple button that executes an action
//
//             ## Usage
//             ~~~js
//             import { Button } from 'dv-component-library/atoms';
//
//             <Button>I'm a simple button!</Button>
//             ~~~
//         `)(() => (
// 			<MenuBar
// 				title="LearnSkin"
// 				sourceAttributes={[
// 					{
// 						srcset: 'http://fillmurray.com/48/48',
// 						media: '(max-width: 1300px)'
// 					},
// 					{
// 						srcset: 'http://fillmurray.com/150/32'
// 					}
// 				]}
// 				imageAttributes={{
// 					src: 'http://fillmurray.com/150/32'
// 				}}
// 				menuLinks={() => (<p>test</p>)}
// 			/>
// 		))
// 	)
// 	.add(
// 		'with button links',
// 		withInfo(`
//             ## About
//             A simple button that executes an action
//
//             ## Usage
//             ~~~js
//             import { Button } from 'dv-component-library/atoms';
//
//             <Button>I'm a simple button!</Button>
//             ~~~
//         `)(() => (
// 			<MenuBar
// 				title="LearnSkin"
// 				sourceAttributes={[
// 					{
// 						srcset: 'http://fillmurray.com/48/48',
// 						media: '(max-width: 1300px)'
// 					},
// 					{
// 						srcset: 'http://fillmurray.com/150/32'
// 					}
// 				]}
// 				imageAttributes={{
// 					src: 'http://fillmurray.com/150/32'
// 				}}
// 				menuLinks={() => (<p>test</p>)}
// 			>
// 				<MenuButtons>
// 					<Button
// 						onClick={action('clicked primary')}
// 						type="tertiary"
// 						outline
// 						small
// 					>
// 						Try it Free
// 					</Button>
// 					<Button
// 						onClick={action('clicked secondary')}
// 						type="secondary"
// 						outline
// 						small
// 					>
// 						Sign In
// 					</Button>
// 				</MenuButtons>
// 			</MenuBar>
// 		))
// 	)
// 	.add(
// 		'with icon links',
// 		withInfo(`
//             ## About
//             A simple button that executes an action
//
//             ## Usage
//             ~~~js
//             import { Button } from 'dv-component-library/atoms';
//
//             <Button>I'm a simple button!</Button>
//             ~~~
//         `)(() => (
// 			<MenuBar
// 				title="LearnSkin"
// 				sourceAttributes={[
// 					{
// 						srcset: 'http://fillmurray.com/48/48',
// 						media: '(max-width: 1300px)'
// 					},
// 					{
// 						srcset: 'http://fillmurray.com/150/32'
// 					}
// 				]}
// 				imageAttributes={{
// 					src: 'http://fillmurray.com/150/32'
// 				}}
// 				menuLinks={() => (<p>test</p>)}
// 			/>
// 		))
// 	);
