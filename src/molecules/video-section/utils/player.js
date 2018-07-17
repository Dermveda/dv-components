import sys from 'system-components';

export const PlayerDismiss = sys({
	position: 'fixed',
	top: '16px',
	right: '16px',
	is: 'button',
	border: 'none',
	background: 'none',
	width: '48px',
	height: '48px',
	diplay: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '100%',
	hover: {
		bg: 'tertiary.main'
	}
}, () => `
	svg { color: white; }
	cursor: pointer;
`);

export const PlayerContainer = sys({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100vw',
	height: '100vh',
	bg: 'rgba(0, 0, 0, 0.8)',
	zIndex: 99999,
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	justifyContent: 'center',
	alignItems: 'center'
}, () => `
	body {
		overflow-y: hidden;
	}
`);
