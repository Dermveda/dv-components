import React from 'react';
import { space } from 'styled-system';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon, HiddenText } from 'atoms';

const AttributeListing = styled.ul.attrs({
	p: props => props.p || 0
})`
	display: flex;
	flex-flow: row wrap;

	${space};


	li:first-of-type {
		list-style-type: none;
		margin-left: 0;
		padding-left: 0;
	}
`;

const AttributeListItem = styled.li.attrs({
	mx: [2, 3],
	pl: 2,
	pr: [2, 0, 0]
})`
	${space};
	color: rgba(0, 0, 0, 0.3);
	font-weight: 600;

	span {
		color: rgba(0, 0, 0, 0.8);
	}

	svg {
		padding-right: 8px;
		color: rgba(0, 0, 0, 0.4);
	}
`;

const IconAttributes = ({ attributeListing, ...attrs }) => (
	<AttributeListing {...attrs}>
		{attributeListing.map(attribute => (
			<AttributeListItem key={attribute.label}>
				<Icon {...attribute.iconAttributes} aria-hidden iconSize="sm" alignToText type="outline" />
				<HiddenText>{attribute.label}: </HiddenText>
				<span>{attribute.text}</span>
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
		text: PropTypes.string.isRequired
	})).isRequired
};

export default IconAttributes;
