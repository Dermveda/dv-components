import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
	render() {
		const { imageAttributes, footerLinks } = this.props;
		return (
			<footer>
				<img {...imageAttributes} />
				<div>
					<div>
						{footerLinks && (
							footerLinks.map(list => (
								<div>
									<h4>{list.title}</h4>
									{list.links.map(items => <p>{items.text}</p>)}
								</div>
							))
						)}
					</div>

				</div>
			</footer>
		);
	}
}
