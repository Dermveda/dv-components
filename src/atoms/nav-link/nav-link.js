import React from 'react';
import styled, { css } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { space, themeGet, color, flex } from 'styled-system';
import { darken } from 'polished';
import { fontSize } from 'utils';

const styles = css`
	${space};
	${fontSize};
	${color};
	${flex};
	outline: none !important;
	text-align: center;
	font-weight: 600;
	letter-spacing: .03rem;
	transition: all .15s linear;
	cursor: pointer;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	background: transparent;
	border: none;
	box-sizing: border-box;
	width: 100%;
	outline: none;
	white-space: nowrap;

	${props => props.leftBorder ? `
		border-left: 1px solid transparent;
	` : `
		border-bottom: 1px solid transparent;
	`}
	text-decoration: none;

	&:hover {
		color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
		text-decoration: none;
		border-color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
	}

	&.active {
		color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
		text-decoration: none;
		border-color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
	}
`;

const props = {
	fontSize: props => props.fontSize || 2,
	display: props => props.display || 'flex',
	py: props => props.py || 2,
	px: props => props.px || 4,
	mx: props => props.mx || 2,
	color: props => props.color || 'gray.medium'
};

export const NavLink = styled(({
	fontSize,
	py,
	px,
	mx,
	color,
	leftBorder,
	...props
}) => <RouterLink {...props} />).attrs(props)`${styles};`;

export const NavButtonLink = styled(({
	fontSize,
	py,
	px,
	mx,
	color,
	leftBorder,
	...props
}) => <button {...props} />).attrs(props)`${styles};`;

export const NavScrollLink = styled(({
	fontSize,
	py,
	px,
	mx,
	color,
	leftBorder,
	...props
}) => <ScrollLink {...props} />).attrs(props)`${styles};`;

const mobileStyles = css`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	${'' /* justify-content: flex-start; */}

	height: 56px;
	text-align: center;
	${space};
	font-weight: 600;
	text-decoration: none;
	box-sizing: border-box;

	svg { color: #717171; }

	&.active ${NavLinkText},
	&.active svg {
		color: ${themeGet('colors.tertiary.main')};
	}
`;

const mobileProps = {
	pt: 2,
	pb: '12px',
	px: '12px'
};

export const NavLinkText = styled.div`
	box-sizing: border-box;
	color: #2b2b2b;
	text-decoration: none;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

	svg {
		margin-left: auto;
	}
`;

export const MobileNavLink = styled(NavLink).attrs(mobileProps)`${mobileStyles}`;
export const MobileNavButtonLink = styled(NavButtonLink).attrs(mobileProps)`${mobileStyles}`;
