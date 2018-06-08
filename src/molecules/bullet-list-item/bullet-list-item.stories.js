import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import BulletListItem from './bullet-list-item';

storiesOf('Molecules/Bullet List Item', module)
	.add('list values', () => (
		<BulletListItem
			title="test"
			listOrderAttributes={{
				value: 3,
				type: 'tertiary'
			}}
		>
			Maecenas efficitur sed urna porttitor dictum. Mauris varius est eu libero consectetur pretium. Etiam enim neque, pellentesque id fringilla non, accumsan vel magna.
		</BulletListItem>
	))
	.add('icon bullets', () => (
		<BulletListItem
			title="test"
			iconAttributes={{
				name: 'rightArrow'
			}}
		>
			Fusce tellus est, finibus at quam sit amet, faucibus ornare lacus. Nulla pellentesque nunc id eleifend consequat. Cras ac sapien.
		</BulletListItem>
	));
