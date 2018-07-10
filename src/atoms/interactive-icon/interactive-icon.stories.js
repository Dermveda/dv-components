import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean, object } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

// React documentation
import ChevronDownReadme from './docs/chevron-down.md';
import MenuIconReadme from './docs/menu-icon.md';

import ChevronDown from './chevron-down';
import MenuIcon from './menu-icon';

storiesOf('Atoms/Interactive Icons', module)
	.add('dropdown icon', withReadme(ChevronDownReadme, () => (
		<ChevronDown
			isOpen={boolean('isOpen', false)}
			{...object('utils', {})}
		/>
	)))
	.add('menu icon', withReadme(MenuIconReadme, () => (
		<MenuIcon
			isDismiss={boolean('isDismiss', false)}
			onClick={action('toggled menu')}
		/>
	)));
