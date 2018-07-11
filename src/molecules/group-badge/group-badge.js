import React from 'react';
import PropTypes from 'prop-types';
import { H3, Box, FlexBox, Badge } from 'atoms';

const flexStyles = {
	display: 'flex',
	flexWrap: 'nowrap',
	alignItems: 'center',
	letterSpacing: '.02rem',
	color: 'gray.medium',
	fontSize: 2
};

const GroupBadge = ({ attributeListing, label, ...attrs }) => (
	<Box {...attrs}>
		{label && <H3 fontSize={[2, 3]}>{label}</H3>}
		<FlexBox {...flexStyles}>
			{
				attributeListing
					.slice(0, 3)
					.map((text, i) => (
						<Badge key={i}>{text}</Badge>
					))
			}
			{
				attributeListing.length > 3 && (
					<Badge mr={0} ml={3}>+ {attributeListing.length - 3} More</Badge>
				)
			}
		</FlexBox>
	</Box>
);

GroupBadge.propTypes = {
	attributeListing: PropTypes.arrayOf(PropTypes.string).isRequired,
	label: PropTypes.string
};

GroupBadge.defaultProps = {
	label: null
};

export default GroupBadge;
