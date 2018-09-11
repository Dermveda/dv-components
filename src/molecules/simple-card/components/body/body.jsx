import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from './components/title/title.jsx';
import Subtitle from './components/subtitle/subtitle.jsx';

const BodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 4px;
`;

const Body = ({ item = {}, attrs }) => {
	const { subtitle, subtitleAttributes, title, titleAttributes } = item;
	if (!subtitle && !title) return null;
	return (
		<BodyContainer {...attrs}>
			<Subtitle subtitle={subtitle} attrs={subtitleAttributes} />
			<Title title={title} attrs={titleAttributes} />
		</BodyContainer>
	);
};
Body.propTypes = {
	item: PropTypes.shape({
		subtitle: PropTypes.string,
		subtitleAttributes: PropTypes.object,
		title: PropTypes.string,
		titleAttributes: PropTypes.object
	}),
	attrs: PropTypes.object
};
export default Body;
