import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, hover } from 'styled-system';
import { Icon } from 'atoms';

const DropDownIcon = styled(Icon).attrs({
	p: props => props.p || 3,
	color: props => props.color || 'gray.medium',
	hover: props =>
		props.hover || {
			color: 'gray.dark',
			cursor: 'pointer'
		},
	name: 'chevronDown'
})`
	display: flex;
	transition: transform 0.15s linear, color 0.1s linear;
	overflow: visible !important;
	box-sizing: content-box;
	${props => (props.isOpen ? 'transform: scaleY(-1)' : 'transform: scaleY(1)')};

	${space};
	${color};
	${hover};
`;

DropDownIcon.propTypes = {
	isOpen: PropTypes.bool
};

DropDownIcon.defaultProps = {
	isOpen: false
};

export default DropDownIcon;
