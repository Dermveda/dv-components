import React from 'react';
import PropTypes from 'prop-types';
import { space, color } from 'styled-system';
import styled from 'styled-components';
import tag from 'clean-tag';
import { fontSize } from 'utils';

const GroupTitle = styled(tag.h4).attrs({
	m: 0,
	pb: 2,
	fontSize: 2,

})`
	${space};
	${fontSize};

	letter-spacing: .02rem;
`;

const GroupContainer = styled(tag.div).attrs({
	fontSize: 2,
	color: props => props.color || '#717171'
})`
	${fontSize};
	${color};
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	letter-spacing: .02rem;
`;

const Badge = styled(tag.div).attrs({
	fontSize: 1,
	py: 1,
	px: 3
})`
	display: inline-block;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	color: #2b2b2b;
	margin: 0 4px;
	${space};
	${fontSize};

	&:first-of-type {
		margin-left: 0;
	}

	&:last-of-type {
		margin-right: 0;
	}
`;

const Box = styled(tag.div)`
	${space};
`;

const GroupPills = ({ attributeListing, label, ...attrs }) => (
	<Box {...attrs}>
		{label && <GroupTitle>{label}</GroupTitle>}
		<GroupContainer>
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
		</GroupContainer>
	</Box>
);

GroupPills.propTypes = {
	attributeListing: PropTypes.arrayOf(PropTypes.string).isRequired,
	label: PropTypes.string
};

GroupPills.defaultProps = {
	label: null
};

export default GroupPills;
