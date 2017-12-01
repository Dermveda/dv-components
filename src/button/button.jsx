import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { button, green, redText, loader, big, show } from '../styles/form-components.css';

const Button = ({ text, to, type, className, icon, target, onClick, isLoading, isLink, isSubmit, isDisabled, isRed, isLarge, isUpperCase, isFullWidth, children, color }) => {
	if (!type) type = 'primary';
	const classes = `btn ${button} ${className} 
		${type === 'primary' ? green : ''}
		${(type === 'primary' && color) ? color : ''}
		${isLarge ? 'btn-lg' : ''} 
		${isUpperCase ? 'text-uppercase' : ''} 
		${isFullWidth ? 'btn-block' : ''}
		${(icon !== '' && icon !== undefined) ? 'd-inline-flex justify-content-center align-items-center' : ''} 
		${isRed ? redText : ''}`;
	const disabled = isDisabled || isLoading;
	const kind = (isSubmit ? 'submit' : (isLink ? '' : 'button'));
	const iconComp = (icon ? <i key='icon_comp' className={`material-icons ${text !== '' ? 'mr-2' : ''}`}>{icon}</i> : '');
	const textComp = (text ? <span key='text_comp'>{text}</span> : '');
	const loaderComp = <i key='loader_comp' className={`${loader} ${isLarge ? big : ''} ${isLoading ? `mr-2 ${show}` : ''}`}></i>;
	let body;
	if (children)
		body = [
			loaderComp,
			children
		];
	else
		body = [
			loaderComp,
			iconComp,
			textComp
		];
	if (isLink)
		return (
			<Link to={to}
				type={kind}
				target={target}
				disabled={disabled}
				className={classes}>
				<div className='d-flex justify-content-center align-items-center'>
					{body}
				</div>
			</Link>
		);
	else
		return (
			<button type={kind}
				disabled={disabled}
				onClick={onClick}
				className={classes}>
				<div className='d-flex justify-content-center align-items-center'>
					{body}
				</div>
			</button>
		);
};
Button.propTypes = {
	text: PropTypes.string,
	to: PropTypes.string,
	icon: PropTypes.string,
	type: PropTypes.oneOf(['primary', 'secondary']),
	className: PropTypes.string,
	target: PropTypes.string,
	onClick: PropTypes.func,
	isLoading: PropTypes.bool,
	isLink: PropTypes.bool,
	isSubmit: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isRed: PropTypes.bool,
	isUpperCase: PropTypes.bool,
	isLarge: PropTypes.bool,
	isFullWidth: PropTypes.bool,
	color: PropTypes.string,
	children: PropTypes.any
};
export default Button;
