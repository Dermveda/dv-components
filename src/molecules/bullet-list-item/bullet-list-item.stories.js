import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import BulletListReadme from './docs/bullet-list-item.md';
import IconListReadme from './docs/icon-list-item.md';
import BulletListItem from './bullet-list-item';

storiesOf('Molecules/Bullet List Item', module)
	.add('number bullets', withReadme(BulletListReadme, () => (
		<BulletListItem
			title={text('title', 'Test')}
			listOrderAttributes={object('listOrderAttributes', {
				value: 3,
				type: 'tertiary'
			})}
		>
			{text('children', 'Lorem ipsum dolor sit amit')}
		</BulletListItem>
	)))
	.add('icon bullets', withReadme(IconListReadme, () => (
		<BulletListItem
			title={text('title', 'Test')}
			iconAttributes={object('iconAttributes', {
				name: 'rightArrow',
				type: 'primary'
			})}
		>
			{text('children', 'Lorem ipsum dolor sit amit')}
		</BulletListItem>
	)));
