import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Bar, NavLink } from 'atoms';

const Link = NavLink.withComponent(ScrollLink);

const InPageNav = ({ links, ...props }) => (
	<Bar is="nav" bg="accent.secondary" justifyContent="center" {...props}>
		{links.map(link => (
			<Link
				key={link.to}
				to={link.to}
				spy
				color="gray.dark"
				smooth
				isDynamic
				duration={300}
				offset={-70}
			>
				{link.text}
			</Link>
		))}
	</Bar>
);


export default InPageNav;
