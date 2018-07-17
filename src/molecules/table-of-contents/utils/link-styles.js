import styled, { css } from 'styled-components';
import { hover, color, space } from 'styled-system';

import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const linkProps = {
	hover: {
		color: 'primary.main',
		fontWeight: 700
	},
	color: 'gray.dark',
	py: 1
};

const linkStyles = css`
	display: flex;
	font-weight: 600;
	flex-flow: row nowrap;
	justify-content: space-between;
	${color};
	${hover};
	${space};

	&.activeClass {
		color: blue;
		font-weight: 700;
	}
`;

export const InternalLink = styled(RouterLink).attrs(linkProps)`${linkStyles}`;
export const ExternalLink = styled.a.attrs(linkProps)`${linkStyles}`;
export const PageLink = styled(ScrollLink).attrs(linkProps)`${linkStyles}`;
