import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { CircleSection, Section } from '../molecules';
import { H3 } from '../atoms';
import { Hideout } from '../img';

storiesOf('CMS/Message', module)
	.add('circle message', () => (
		<CircleSection
			content
			centered
			mt={4}
			bg="gray.light"
			backgroundImage={{
				url: `data:image/svg+xml;base64,${btoa(Hideout)}`,
				pattern: true,
				size: '70px'
			}}
			circleAttributes={{
				text: text('Title', 'Example title here'),
				bg: 'white'
			}}
		>
			{text('Description', 'Simple description can go here')}
		</CircleSection>
	))
	.add('message', () => (
		<Section
			display="flex"
			content
			centered
			bg="gray.light"
			backgroundImage={{
				url: `data:image/svg+xml;base64,${btoa(Hideout)}`,
				pattern: true,
				size: '70px'
			}}
		>
			<H3 style={{ fontWeight: 600, maxWidth: '800px', textAlign: 'center' }}>
				{text('Message Text', 'simple message can go here')}
			</H3>
		</Section>
	))
	.add('small message', () => (
		<Section content centered textAlign="center">
			<div style={{ textAlign: 'center' }}>
				<small>{text('Message Text', 'simple message can go here')}</small>
			</div>
		</Section>
	))
