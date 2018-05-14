import styled from 'styled-components';
import { space, justifyContent, themeGet, display } from 'styled-system';

const Bar = styled.header`
	display: flex;
	flex-flow: row wrap;
	align-items: center;

	position: sticky;
	top: 0;

	border-top: 4px solid ${themeGet('colors.primary.tertiary', '#2B2B2B')};
	border-bottom: 1px solid #ACACAC;
	${space};
	${display}
	${justifyContent};
`;

export default Bar;
