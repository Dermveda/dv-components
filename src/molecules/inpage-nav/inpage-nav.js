import React from 'react';
import styled from 'styled-components';
import { DesktopInPageNav, MobileInPageNav } from './index';

const DesktopNav = styled(DesktopInPageNav)`
	@media (max-width: 1023px) {
		display: none;
	}
`;

const MobileNav = styled(MobileInPageNav)`
	@media (min-width: 1024px) {
		display: none;
	}
`;

const InPageNav = props => (
	<React.Fragment>
		<DesktopNav {...props} />
		<MobileNav {...props} />
	</React.Fragment>
);

export default InPageNav;
