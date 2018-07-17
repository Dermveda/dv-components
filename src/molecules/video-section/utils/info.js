import sys from 'system-components';
import PropTypes from 'prop-types';

export const PlayerButton= sys({
	flex: '1 150px',
	is: 'button',
	maxWidth: '150px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	border: 'none',
	bg: 'gray.light',
	mr: 4,
	height: '120px'
}, props => `
	background-image: url(${props.img});
	background-size: cover;
	cursor: pointer;

	&:hover {
		* {
			color: rgba(255, 255, 255, 0.8);
		}
	}
`);

PlayerButton.propTypes = {
	img: PropTypes.string.isRequired
};

export const InfoContainer = sys({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'center',
	p: 5,
	bg: 'gray.light',
	width: '100%'
});
