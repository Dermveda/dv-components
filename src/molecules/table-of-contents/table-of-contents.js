import React, { Component } from 'react';
import { Subtitle, Box, Icon } from 'atoms';
import { InternalLink, ExternalLink, PageLink, iconStyles } from './utils';


export default class TableOfContents extends Component {
	renderInternalLink = ({ to, text }) => (
		<InternalLink key={to} to={to}>
			<span>{text}</span>
			<Icon {...iconStyles('rightArrow')} />
		</InternalLink>
	)

	renderExternalLink = ({ href, text }) => (
		<ExternalLink key={href} href={href} target="_blank" rel="noopener noreferrer">
			<span>{text}</span>
			<Icon {...iconStyles('externalLink')} />
		</ExternalLink>
	)

	renderLink = ({ to, href, ...props }) => {
		if (to) return this.renderInternalLink({ to, ...props });
		else if (href) return this.renderExternalLink({ href, ...props });
	}

	renderGrouping = ({ title, key, links }) => (
		<section key={key}>
			<Subtitle fontWeight={700} is="div" pb={1}>{title}</Subtitle>
			<div>
				{links.map(this.renderLink)}
			</div>
		</section>
	)

	render = () => (
		<Box is="aside" p={[3, 4]} bg="gray.light">
			{this.props.contents.map(this.renderGrouping)}
		</Box>
	)
}
