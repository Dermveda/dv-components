import styled from 'styled-components';
import { space, color, hover } from 'styled-system';
import { Icon } from 'atoms';

const DropDownIcon = styled(Icon).attrs({
	p: 3,
	color: 'gray.medium',
	hover: {
		color: 'gray.dark'
	},
	name: 'chevronDown'
})`
	display: flex;
	transition: transform .15s linear, color .1s linear;
	overflow: visible !important;
    box-sizing: content-box;
	${props => props.isOpen ? 'transform: scaleY(-1)': 'transform: scaleY(1)'};

	${space};
	${color};
	${hover};
`;

export default DropDownIcon;
