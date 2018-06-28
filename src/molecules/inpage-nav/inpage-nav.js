import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Bar, NavLink } from 'atoms';

const Link = NavLink.withComponent(ScrollLink);

const InPageNav = ({ links, ...props }) => (
	<Bar color="white" is="nav" bg="accent.secondary" justifyContent="center" {...props}>
		{links.map(link => (
			<Link
				key={link.to}
				px="0"
				flex="1"
				to={link.to}
				spy
				color="white"
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
