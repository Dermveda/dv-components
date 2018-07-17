import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LinkWrapper } from 'atoms';
import { hideVisually } from 'polished';
import { space, justifyContent, themeGet } from 'styled-system';

const Bar = styled.header`
	display: flex;
	align-items: center;
	background: white;

	position: fixed;
	top: 0;
	right: 0;
	left: 0;

	border-top: 3px solid ${themeGet('colors.accent.logo', '#2B2B2B')};
	border-bottom: 1px solid #ACACAC;
	${space};
	${justifyContent};
`;

const Title = styled.div`
	margin: 0;
	padding: 0;
	font-size: 1.2rem;

	display: flex;
`;

const TitleImage = styled.img`
	width: auto;
	height: 40px;
`;

const TitleText = styled.span`
	${hideVisually()};
`;

const AppBar = ({ children, logo, to, title, ...props }) => (
	<Bar {...props}
		py={3}
		px={children && 4}
		justifyContent={children ? 'space-between' : 'center'}
	>
		<Title>
			<LinkWrapper to={to}>
				<TitleImage src={logo} alt={title} aria-hidden />
				<TitleText>{title}</TitleText>
			</LinkWrapper>
		</Title>
		{children && children}
	</Bar>
);

AppBar.propTypes = {
	children: PropTypes.node,
	logo: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	to: PropTypes.string
};

AppBar.defaultProps = {
	children: null,
	to: null
};

export default AppBar;
