import sys from 'system-components';

export const Sidebar = sys({
	is: 'aside',
	flex: '1 250px',
	width: '100%'
}, () => `
	@media (min-width: 992px) {
		flex: 0 0 25%;
		max-width: 25%;
	}
`, 'space');

export const SidebarMain = sys({
	is: 'section',
	mx: 'auto',
	width: '100%'
}, () => `
	@media (min-width: 992px) {
		flex: 0 0 75%;
		max-width: 75%;
	}
`);

export const Container = sys({
	maxWidth: '1850px',
	is: 'main',
	mx: 'auto',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center'
});
