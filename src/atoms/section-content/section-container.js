import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, flex, flexWrap, flexDirection, justifyContent, alignItems, space, themeGet } from 'styled-system';

const SectionContainer = styled.section.attrs({
	p: [3, 4, 6],
	m: 0
})`
	${color};
	${flex};
	${flexWrap};
	${flexDirection};
	${justifyContent};
	${alignItems};
	${space};

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background: ${props => themeGet(`backgrounds.${props.type}`, 'transparent')};
`;

SectionContainer.propTypes = {
	type: PropTypes.oneOf(['white', 'gray', 'primary', 'tertiary', 'secondary', 'transparent'])
};

SectionContainer.defaultProps = {
	type: 'white'
};

export default SectionContainer;
