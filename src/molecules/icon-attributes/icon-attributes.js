import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon, HiddenText, FlexBox, Content } from 'atoms';

const AttributeListing = styled(FlexBox).attrs({
	is: 'ul',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	p: props => props.p || 0
})`
	list-style-type: none;
`;

const AttributeListItem = styled(FlexBox).attrs({
	m: 0,
	py: 0,
	px: 3,
	is: 'li',
	flexDirection: props => props.column ? 'column' : ['column', 'row', 'row'],
	fontWeight: 600,
	display: 'flex',
	flexWrap: 'nowrap',
	alignItems: 'center'
})`
	&:first-of-type {
		padding-left: 0;
	}

	&:last-of-type {
		padding-right: 0;
	}
`;

const IconAttributes = ({ attributeListing, small, column, ...attrs }) => (
	<AttributeListing {...attrs}>
		{attributeListing.map(attribute => (
			<AttributeListItem column={column} key={attribute.label}>
				<Icon
					{...attribute.iconAttributes}
					pr={[0, 2]}
					pb={[1, 0]}
					aria-hidden
					iconSize="sm"
					color="rgba(0, 0, 0, .6)"
					strokeSize={4}
					type="outline"
					alignToText
				/>
				<HiddenText>{attribute.label}: </HiddenText>
				{
					attribute.text && (
						<Content
							fontSize={small ? [0, 1] : [1, 2]} m={0} pt={1}
							color="rgba(0, 0, 0, 0.8)"
						>
							{attribute.text}
						</Content>
					)
				}
			</AttributeListItem>
		))}
	</AttributeListing>
);

IconAttributes.propTypes = {
	attributeListing: PropTypes.arrayOf(PropTypes.shape({
		iconAttributes: PropTypes.shape({
			name: PropTypes.string.isRequired
		}),
		label: PropTypes.string.isRequired,
		text: PropTypes.string,
	})).isRequired,
	small: PropTypes.bool,
	column: PropTypes.bool
};

IconAttributes.defaultProps = {
	small: false,
	column: false
};

export default IconAttributes;
