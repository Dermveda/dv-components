const defaultCss = {
	dermvedaGreen: '#599269',
	dermvedaGray: '#8f8f8f',
	thumbHeight: 15,
	thumbWidth: 15,
	thumbBorderRadius: '50%',
	trackHeight: '5px',
	thumbColor: '#599269',
	trackColor: 'rgba(0, 0, 0, 0.2)',
	fillColor: '#599269'
};

const css = {
	wrapper: {
		display: 'flex'
	},
	slider: {
		display: 'inline-block',
		position: 'relative',
		width: 'calc(100% - 50px)'
	},
	track: {
		padding: `${(defaultCss.thumbWidth / 2) + 4}px 0`,
		width: '100%',
		touchAction: 'manipulation',
		cursor: 'pointer'
	},
	left: {
		height: defaultCss.trackHeight,
		background: defaultCss.fillColor,
	},
	leftDisabled: {
		backgroundColor: defaultCss.trackColor
	},
	right: {
		height: defaultCss.trackHeight,
		background: defaultCss.trackColor,
		float: 'right',
		marginTop: `-${defaultCss.trackHeight}`,
	},
	thumb: {
		background: defaultCss.thumbColor,
		height: defaultCss.thumbHeight + 'px',
		width: defaultCss.thumbWidth + 'px',
		borderRadius: defaultCss.thumbBorderRadius,
		position: 'absolute',
		marginTop: `-${2 + (defaultCss.thumbHeight / 2)}px`,
		touchAction: 'none',
		transform: 'scale(1)',
		transition: '.3s transform ease-in-out'
	},
	thumbDisabled: {
		backgroundColor: defaultCss.dermvedaGray
	},
	thumbActive: {
		transform: 'scale(1.5)',
		transition: '.1s transform ease-in-out'
	},
	label: {
		cursor: 'pointer',
		position: 'absolute'
	},
	sideLabel: {
		display: 'inline-block',
		padding: '5px 10px',
		margin: '0 auto',
		alignSelf: 'center'
	},
};

export default css;
