import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonLink, H3, Content, Box, FlexBox } from 'atoms';

const CallToAction = ({ buttonProps, title, children, ...props }) => {
	const { text, ...buttonAttrs } = buttonProps;

	const sectionProps = Object.assign({}, {
		is: 'aside',
		display: 'flex',
		flexDirection: ['column', 'row'],
		flexWrap: ['nowrap', 'wrap'],
		alignItems: ['flex-start', 'center'],
		justifyContent: 'space-between',
		p: [5, 6],
		bg: 'gray.light'
	}, props);

	return (
		<FlexBox {...sectionProps}>
			<Box pr={3}>
				<H3 fontSize={[3, 4]} is="h4">{title}</H3>
				<Content pb={3} m={0}>{children}</Content>
			</Box>
			{
				buttonProps.onClick ? (
					<Button type="primary" outline {...buttonAttrs}>{text}</Button>
				) : (
					<ButtonLink type="primary" outline {...buttonAttrs}>{text}</ButtonLink>
				)
			}
		</FlexBox>
	);
};

CallToAction.propTypes = {
	buttonProps: PropTypes.shape({
		text: PropTypes.string.isRequired
	}).isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default CallToAction;
