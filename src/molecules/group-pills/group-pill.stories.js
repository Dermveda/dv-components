import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import GroupPills from './group-pills';

storiesOf('Molecules/Group Pill', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add('simple input', () => {
		const defaultAttributes = ['3 hrs', '0.75 Credits', 'Free', '3 hrs', '0.75 Credits', 'Free'];
		return (
			<GroupPills
				label={text('Label', 'Credit Types')}
				attributeListing={object('attributes', defaultAttributes)}
			/>
		);
	});
