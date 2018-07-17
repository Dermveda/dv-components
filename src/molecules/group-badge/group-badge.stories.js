import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import GroupBadgeReadme from './docs/group-badge.md';
import GroupBadge from './group-badge';

storiesOf('Molecules/Group Badges', module)
	.addDecorator(withReadme(GroupBadgeReadme))
	.add('with less than 3 items', () => {
		const defaultAttributes = ['0.75 Credits', 'Free'];
		return (
			<GroupBadge
				label={text('label', 'Credit Types')}
				attributeListing={object('attributeListing', defaultAttributes)}
			/>
		);
	})
	.add('with more than 3 items', () => {
		const defaultAttributes = ['3 hrs', '0.75 Credits', 'Free', '3 hrs', '0.75 Credits', 'Free'];
		return (
			<GroupBadge
				label={text('label', 'Credit Types')}
				attributeListing={object('attributeListing', defaultAttributes)}
			/>
		);
	});
