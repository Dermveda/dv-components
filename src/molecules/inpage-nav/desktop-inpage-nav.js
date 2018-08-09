import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import { Bar, NavLink } from 'atoms';

const Link = NavLink.withComponent(ScrollLink);

const DesktopInPageNav = ({ links, ...props }) => {
	return (
		<Bar color="black" is="nav" bg="accent.primary" justifyContent="center" {...props}>
			{links.map(link => (
				<Link key={link.to} px="0" flex="1" to={link.to} spy color="black !important" smooth isDynamic duration={300} offset={-70}>
					{link.text}
				</Link>
			))}
		</Bar>
	);
};

DesktopInPageNav.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			to: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	).isRequired
};

export default DesktopInPageNav;
