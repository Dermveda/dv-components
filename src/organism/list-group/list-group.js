import React, { Component } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { ListItem, IconListItem, ImageListItem } from 'molecules';
import PropTypes from 'prop-types';

class ListGroup extends Component {
	static propTypes = {
		listItems: PropTypes.arrayOf(
			PropTypes.shape({
				iconAttributes: PropTypes.shape({
					name: PropTypes.string.isRequired
				}),
				imageAttributes: PropTypes.shape({
					src: PropTypes.string.isRequired,
					alt: PropTypes.string.isRequired
				}),
				title: PropTypes.string.isRequired,
				children: PropTypes.node.isRequired,
				buttonAttributes: PropTypes.shape({
					text: PropTypes.string.isRequired
				}),
				type: PropTypes.string
			})
		)
	}

	static ListGrouping = styled.ul`
		display: flex;
		flex-flow: row wrap;

		& > * {
			flex: 1 350px;
			margin: 8px;
			padding: 8px;
		}

		${space};
	`;

	render() {
		const { listItems, ...attrs } = this.props;

		return (
			<ListGroup.ListGrouping {...attrs}>
				{listItems.map(({ children, ...item }, i) => {
					const key = `${item.title}-${i}`;
					if (item.iconAttributes) return (
						<IconListItem {...item} key={key}>{children}</IconListItem>
					);
					else if (item.imageAttributes) return (
						<ImageListItem {...item} key={key}>{children}</ImageListItem>
					);

					return <ListItem {...item} key={key}>{children}</ListItem>;
				})}
			</ListGroup.ListGrouping>
		);
	}
}

export default ListGroup;
