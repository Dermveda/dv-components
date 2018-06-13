import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
/* eslint-enable import/no-extraneous-dependencies */

import {
	Card,
	CardContainer,
	CardImage,
	CardTitle,
	CardHeader,
	CardText,
	CardSubtitle,
	CardFooter
} from './card';

import { Button } from 'atoms';

storiesOf('Atoms/Card', module)
	.addDecorator(checkA11y)
	.add('simple input', () => (
		<Card boxShadow={2}>
			<CardImage src="http://fillmurray.com/1280/720" />
			<CardContainer>
				<CardHeader>
					<CardTitle>What is Eczema</CardTitle>
					<CardSubtitle>Eczema Series</CardSubtitle>
				</CardHeader>
				<CardText>
					Maecenas viverra mi sed laoreet condimentum. Nunc tempus tempus aliquam.
					Pellentesque id felis quis purus tristique interdum. Proin facilisis elit
					sit amet massa molestie cursus. Phasellus laoreet facilisis massa non molestie.
					asdfadfasdf
				</CardText>
				<CardFooter>
					<Button outline type="primary" small onClick={() => {}}>
						Take The Course
					</Button>
				</CardFooter>
			</CardContainer>
		</Card>
	));
