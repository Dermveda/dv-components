import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon, MobileNavLink, MobileNavButtonLink, NavLinkText } from 'atoms';
import { space, color } from 'styled-system';

const MobileNavLinkContainer = styled.div.attrs({
	bg: 'gray.light'
})`
	display: flex;
	flex-flow: column nowrap;

	${space};
	${color};
`;

const BreadCrumbContainer = styled.div`
	display: flex;
	margin-bottom: 8px;

	& > button:nth-child(n + 2):not(:last-of-type)::after {
		content: "/";
		margin-left: 2px;
	}
`;

export default class MenuContainer extends Component {
	static propTypes = {
		onClick: PropTypes.func,
		dismiss: PropTypes.func,
		links: PropTypes.array
	}

	static defaultProps = {
		onClick: () => {}
	}

	state = {
		breadcrumb: []
	};

	addBreadCrumb = value => this.setState(({ breadcrumb }) => ({
		breadcrumb: breadcrumb.concat([value])
	}));

	removeBreadCrumb = value => this.setState(({ breadcrumb }) => ({
		breadcrumb: value ? breadcrumb.slice(0, breadcrumb.indexOf(value)) : []
	}))

	getSubNav = (index = 0, links = this.props.links) => {
		const { breadcrumb } = this.state;
		if (!breadcrumb.length) return links;

		const { subLinks } = links.find(x => x.key === breadcrumb[index].key);
		return (index === breadcrumb.length - 1) ?
			subLinks : this.getSubNav(index + 1, subLinks);
	}

	renderBreadcrumb = () => {
		const breadCrumbs = this
			.state
			.breadcrumb
			.map(({ key, text }) => (
				<Button
					key={key}
					nostyle
					mr={1}
					onClick={() => this.removeBreadCrumb(key)}
				>
					{text}
				</Button>
			));

		return (
			<BreadCrumbContainer>
				<Button
					nostyle
					mr={3}
					ml={2}
					type="secondary"
					onClick={() => {
						this.state.breadcrumb.length ?
							this.removeBreadCrumb(this.state.breadcrumb.length - 1) :
							this.props.dismiss();
					}}
				>
					<Icon
						type="outline"
						strokeSize={3}
						rotate="90deg"
						iconSize="sm"
						name={this.state.breadcrumb.length ? 'chevronDown' : 'close'}
					/>
				</Button>
				{breadCrumbs}
			</BreadCrumbContainer>
		);
	}

	renderNavItem = (item) => {
		const buttonProps = {
			onClick: item.subLinks ?
				() => { this.addBreadCrumb(item); } :
				() => {
					if (item.onClick) item.onClick();
					this.props.dismiss();
				},
			to: item.to || undefined
		};

		return buttonProps.to ? (
			<MobileNavLink {...buttonProps}>
				<NavLinkText>{item.text}</NavLinkText>
			</MobileNavLink>
		) : (
			<MobileNavButtonLink {...buttonProps} display="block">
				<NavLinkText>
					<div style={{ paddingRight: '10px' }}>{item.text}</div>
					<Icon
						type="outline"
						strokeSize={3}
						rotate="-90deg"
						iconSize="xs"
						name="chevronDown"
					/>
				</NavLinkText>
			</MobileNavButtonLink>
		);
	}

	render() {
		const currentPage = this.getSubNav();
		return (
			<MobileNavLinkContainer>
				{this.renderBreadcrumb()}
				{currentPage.map(this.renderNavItem)}
			</MobileNavLinkContainer>
		);
	}
}
