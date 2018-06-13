import styled, { css } from 'styled-components';
import tag from 'clean-tag';
import { space, justifyContent, themeGet, display, color, flexDirection } from 'styled-system';

const navBorder = css`
	border-top: 4px solid ${themeGet('colors.primary.main', '#2B2B2B')};
	border-bottom: 1px solid #ACACAC;
`;

const Bar = styled(tag)`
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	position: sticky;
	top: 0;

	${props => props.navBorder && navBorder};
	${space};
	${color};
	${display};
	${flexDirection};
	${justifyContent};
`;

export default Bar;
