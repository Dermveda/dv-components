import React from 'react';
import { space, flexDirection } from 'styled-system';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon, HiddenText } from 'atoms';
import { fontSize } from 'utils';

const AttributeListing = styled.ul.attrs({
	p: props => props.p || 0
})`
	display: flex;
	flex-flow: row wrap;
	list-style-type: none;

	${space};
`;

const AttributeListItem = styled.li.attrs({
	m: 0,
	p: 0,
	flexDirection: props => props.column ? 'column' : ['column', 'row', 'row']
})`
	${space};
	${flexDirection};
	color: rgba(0, 0, 0, 0.8);
	font-weight: 600;

	display: flex;
	flex-wrap: nowrap;
	align-items: center;

	svg {
		color: rgba(0, 0, 0, 0.6);
	}

	padding: 0 16px;

	&:first-of-type {
		padding-left: 0;
	}

	&:last-of-type {
		padding-right: 0;
	}
`;

const AttributeText = styled.span.attrs({
	fontSize: props => props.small ? [0, 1] : [1, 2]
})`
	${fontSize};
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
					strokeSize={4}
					type="outline"
				/>
				<HiddenText>{attribute.label}: </HiddenText>
				<AttributeText small={small}>{attribute.text}</AttributeText>
			</AttributeListItem>
		))}
	</AttributeListing>
);

IconAttributes.propTypes = {
	attributeListing: PropTypes.arrayOf(PropTypes.shape({
		iconAttributes: PropTypes.shape({
			name: PropTypes.string.isRequired
		}),
		column: PropTypes.bool,
		label: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		small: PropTypes.bool
	})).isRequired
};

IconAttributes.defaultProps = {
	small: false,
	column: false
};

export default IconAttributes;
