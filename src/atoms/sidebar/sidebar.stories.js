import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { Sidebar, SidebarMain, Container } from './sidebar';

storiesOf('Atoms/Sidebar', module)
	.add('simple input', () => (
		<Container>
			<Sidebar>
				I'm a sidebar
			</Sidebar>
			<SidebarMain>
				I'm the main content!
			</SidebarMain>
		</Container>
	));
