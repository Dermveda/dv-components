import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderFooter as buildFooter } from 'utils';

const FooterContainer = styled.div`
	margin-top: auto;
`;

const Footer = ({ renderFooter, footerProps, footer, item }) => {
	if (!renderFooter && !footerProps && !footer) return null;
	if (renderFooter && footerProps) return <FooterContainer>{buildFooter(footerProps, item, renderFooter)}</FooterContainer>;
	return <FooterContainer>{footer}</FooterContainer>;
};
Footer.propTypes = {
	footerProps: PropTypes.array,
	renderFooter: PropTypes.func,
	footer: PropTypes.object,
	item: PropTypes.object
};
export default Footer;
