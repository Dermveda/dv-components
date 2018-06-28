import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { SubMenuContainer, NavLink, MegaMenuItem } from 'atoms';
import HoverNav from './hover-nav';
import UserDropdown from './user-dropdown';

storiesOf('Molecules/Hover Nav', module)
	.add('menu item dropdown', () => (
		<nav>
			<ul style={{ display: 'flex', padding: 0 }}>
				<HoverNav title="test">
					<MegaMenuItem title="test">
						<SubMenuContainer>
							testeroo
						</SubMenuContainer>
					</MegaMenuItem>
					<MegaMenuItem title="something" to="/" />
					<NavLink to="/">tset</NavLink>
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
	))
	.add('user dropdown', () => (
		<nav>
			<ul style={{ display: 'flex', padding: 0 }}>
				<HoverNav title="test">
					<MegaMenuItem title="test">
						<SubMenuContainer>
							testeroo
						</SubMenuContainer>
					</MegaMenuItem>
					<MegaMenuItem title="something" to="/" />
					<NavLink to="/">tset</NavLink>
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
				<UserDropdown>
					<MegaMenuItem title="something" to="/" />
				</UserDropdown>
			</ul>
		</nav>
	));
