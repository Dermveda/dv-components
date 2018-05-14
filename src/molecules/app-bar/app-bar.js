import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideVisually } from 'polished';
import { space, justifyContent, themeGet } from 'styled-system';

const Bar = styled.header`
	display: flex;
	align-items: center;

	position: sticky;
	top: 0;

	border-top: 3px solid ${themeGet('colors.primary.tertiary', '#2B2B2B')};
	border-bottom: 1px solid #ACACAC;
	${space};
	${justifyContent}
`;

const Title = styled.h1`
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

const AppBar = ({ children, logo, title }) => (
	<Bar
		py={3}
		px={children && 4}
		justifyContent={children ? 'space-between' : 'center'}
	>
		<Title>
			<TitleImage src={logo} alt={title} aria-hidden />
			<TitleText>{title}</TitleText>
		</Title>
		{children && children}
	</Bar>
);

AppBar.propTypes = {
	children: PropTypes.node,
	logo: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

AppBar.defaultProps = {
	children: null
};

export default AppBar;
