import React from 'react';
import styled from 'styled-components';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */

import { Spin, SlideDown } from 'animations';

storiesOf('Animations/Spin', module)
	.addDecorator(checkA11y)
	.add(
		'simple spinning box',
		withInfo(`
            Spinning animation is useful for making a loading indicator
            or some form of CTA. Is highly distracting, so only use it when the
            focus should be on the spinning element and no where else.
            At most only one instance of spin should be active at a time.
            ## Usage
            ~~~js
			import { Animations } from '@dnovicki/dv-components';
            const Box = styled.div\`
                animation: \${Animations.Spin} 1s ease infinite;
                height: 20px;
                width: 20px;
                background-color: red;
            \`;
            <Box />
            ~~~
        `)(() => {
			const Box = styled.div`
                background-color: red;
                height: 20px;
                width: 20px;
                animation: ${Spin} 1s ease infinite;
            `;

			return (<Box />);
		})
	)
	.add(
		'slide item down',
		withInfo(`
			Toggle a slide animation for a component that causes the element
			to slide to a specific height

			## Usage
			~~~js
			import { Animations } from '@dnovicki/dv-components';
			const Box = styled.div\`
				\${Animations.SlideDown};
			\`;

			class Dropdown extends React.Component {
				state = { isHidden: true }

				toggleElement = () => this.setState(({ isHidden }) =>
					({ isHidden: !isHidden}));

				render = () => (
					<div>
						<button onClick={this.toggleElement}>Toggle</button>
						<Box isHidden={this.state.isHidden}>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
						</Box>
					</div>
				)
			}
			~~~
		`)(() => {
			const Box = styled.div`
				${SlideDown};
			`;

			class Dropdown extends React.Component {
				state = { isHidden: true }

				toggleElement = () => this.setState(({ isHidden }) =>
					({ isHidden: !isHidden}));

				render = () => (
					<div>
						<button onClick={this.toggleElement}>Toggle</button>
						<Box isHidden={this.state.isHidden}>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
							<div>hidden stuff that displays on toglge</div>
						</Box>
					</div>
				)
			}

			return <Dropdown />;
		})
	);
