import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { SubMenuContainer, NavLink, MegaMenuItem } from 'atoms';
import HoverNav from './hover-nav';

storiesOf('Molecules/Hover Nav', module)
	.add('simple input', () => (
		<nav>
			<ul style={{ display: 'flex', padding: 0 }}>
				<HoverNav title="test">
					<MegaMenuItem title="test">
						<SubMenuContainer>
							testeroo
						</SubMenuContainer>
					</MegaMenuItem>
					<MegaMenuItem title="something" to="/" />
				</HoverNav>
				<HoverNav
					title="testeroo"
				>
					<MegaMenuItem title="test">
						<SubMenuContainer>
							testeroo
						</SubMenuContainer>
					</MegaMenuItem>
					<MegaMenuItem title="something" to="/" />
				</HoverNav>
				<HoverNav
					title="testeroo"
				>
					<MegaMenuItem title="test">
						<SubMenuContainer>
							testeroo
						</SubMenuContainer>
					</MegaMenuItem>
					<MegaMenuItem title="something" to="/" />
				</HoverNav>
			</ul>
			this is an example
		</nav>

	));
