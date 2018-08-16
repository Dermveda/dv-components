import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tag from 'clean-tag';
import { display, flexDirection, flexWrap, space, alignItems } from 'styled-system';
import { Icon, HiddenText, Content } from 'atoms';

const AttributeListing = styled(tag.ul).attrs({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	p: props => props.p || 0
})`
	list-style-type: none;
	${display};
	${flexDirection};
	${flexWrap};
	${space};
`;

const AttributeListItem = styled(tag.li).attrs({
	m: 0,
	py: 0,
	px: 3,
	flexDirection: props => props.flexDirection,
	fontWeight: props => props.fontWeight || 600,
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
	${display};
	${flexWrap};
	${alignItems};
	${flexDirection};
	${space};
`;

const buildIconAttributes = iconAttributes => {
	const { name, type, iconSize, color } = iconAttributes;
	return {
		pr: [0, 2],
		pb: [1, 0],
		name: name,
		'aria-hidden': true,
		iconSize: iconSize || 'sm',
		color: color || 'rgba(0, 0, 0, .6)',
		strokeSize: 4,
		type: type || 'outline',
		alignToText: true
	};
};

const IconAttributes = ({ attributeListing, small, column, ...attrs }) => (
	<AttributeListing {...attrs}>
		{attributeListing.map(attribute => {
			const iconAttributes = buildIconAttributes(attribute.iconAttributes);
			const flexDirection = column ? { flexDirection: 'column' } : { flexDirection: ['column', 'row', 'row'] };
			return (
				<AttributeListItem {...flexDirection} key={attribute.label} {...attribute.textAttributes}>
					<Icon {...iconAttributes} />
					<HiddenText>{attribute.label}: </HiddenText>
					{attribute.text && (
						<Content fontSize={small ? [0, 1] : [1, 2]} m={0} pt={1} color="rgba(0, 0, 0, 0.8)">
							{attribute.text}
						</Content>
					)}
				</AttributeListItem>
			);
		})}
	</AttributeListing>
);

IconAttributes.propTypes = {
	attributeListing: PropTypes.arrayOf(
		PropTypes.shape({
			iconAttributes: PropTypes.shape({
				name: PropTypes.string.isRequired,
				type: PropTypes.string
			}),
			textAttributes: PropTypes.object,
			label: PropTypes.string.isRequired,
			text: PropTypes.string
		})
	).isRequired,
	small: PropTypes.bool,
	column: PropTypes.bool
};

IconAttributes.defaultProps = {
	small: false,
	column: false
};

export default IconAttributes;
