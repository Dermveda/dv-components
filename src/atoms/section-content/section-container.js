import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, flex, flexWrap, flexDirection, justifyContent, alignItems, space, themeGet } from 'styled-system';

const SectionContainer = styled.section.attrs({
	p: [2, 4, 6],
	m: 0
})`
	${color};
	${flex};
	${flexWrap};
	${flexDirection};
	${justifyContent};
	${alignItems};
	${space};

	background: ${props => themeGet(`backgrounds.${props.type}`, 'transparent')};
`;

SectionContainer.propTypes = {
	type: PropTypes.oneOf(['white', 'gray', 'primary', 'tertiary', 'secondary'])
};

SectionContainer.defaultProps = {
	type: 'white'
};

export default SectionContainer;
