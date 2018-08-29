import sys from 'system-components';
import PropTypes from 'prop-types';

export const PlayerButton = sys(
	{
		flex: '1 120px',
		is: 'button',
		maxWidth: '300px',
		minWidth: '250px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: 'none',
		bg: 'gray.light',
		p: 3,
		height: '250px'
	},
	props => `
	background-image: url(${props.img});
	background-size: cover;
	cursor: pointer;

	&:hover {
		* {
			color: rgba(255, 255, 255, 0.8);
		}
	}
`
);

PlayerButton.propTypes = {
	img: PropTypes.string.isRequired
};

export const InfoContainer = sys({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'space-evenly',
	p: 5,
	bg: 'gray.light',
	width: '100%',
	flex: '2 1'
});

export const PlayerText = sys({
	display: 'flex',
	flexDirection: 'column',
	p: 3,
	maxWidth: 500
});
