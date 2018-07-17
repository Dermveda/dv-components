import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'atoms';

class MenuIcon extends Component {
	static propTypes = {
		isDismiss: PropTypes.bool,
		onClick: PropTypes.func.isRequired
	}

	static defaultProps = {
		isDismiss: false
	}

	state = {
		isDismiss: this.props.isDismiss
	}

	componentDidUpdate = (prevProps) => {
		const prevDismiss = prevProps.isDismiss;
		const currDismiss = this.props.isDismiss;

		if (prevDismiss !== currDismiss) this.setState({ isDismiss: currDismiss });
	}

	onClick = () => {
		this.setState(({ isDismiss }) => ({ isDismiss: !isDismiss }));
		this.props.onClick();
	};

	render = () => {
		const { isDismiss, onClick, ...attrs } = this.props; // eslint-disable-line

		return this.state.isDismiss ?
			<Icon {...attrs} name="close" onClick={this.onClick} /> :
			<Icon {...attrs} name="menu" onClick={this.onClick} />;
	}
}

export default MenuIcon;
