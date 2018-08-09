import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { DesktopInPageNav, MobileInPageNav } from './index';

const DesktopNav = styled(DesktopInPageNav)`
	@media (max-width: 64rem) {
		display: none;
	}
`;

const MobileNav = styled(MobileInPageNav)`
	@media (min-width: 64rem) {
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
