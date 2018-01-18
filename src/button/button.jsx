import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
	text,
	to,
	type,
	className,
	icon,
	target,
	onClick,
	isLoading,
	isLink,
	isSubmit,
	isDisabled,
	isRed,
	isLarge,
	isUpperCase,
	isFullWidth,
	children,
	color
}) => {
	if (!type) type = 'primary';
	const classes = `btn dvc-button ${className} 
		${type === 'primary' ? 'dvc-button--primary' : ''}
		${type === 'primary' && color ? color : 'dvc-primary-background'}
		${isLarge ? 'btn-lg' : ''} 
		${isUpperCase ? 'text-uppercase' : ''} 
		${isFullWidth ? 'btn-block' : ''}
		${icon !== '' && icon !== undefined ? 'd-inline-flex justify-content-center align-items-center' : ''} 
		${isRed && type !== 'primary' ? 'dvc-button--red-text' : ''}`;
	const disabled = isDisabled || isLoading;
	const kind = isSubmit ? 'submit' : isLink ? '' : 'button';
	const iconComp = icon ? (
		<i key="icon_comp" className={`material-icons ${text !== '' ? 'mr-2' : ''}`}>
			{icon}
		</i>
	) : (
		''
	);
	const textComp = text ? <span key="text_comp">{text}</span> : '';
	const loaderComp = (
		<i
			key="loader_comp"
			className={`dvc-button__loader ${isLarge ? 'dvc-button__loader--show--big' : ''} ${isLoading ? 'mr-2 dvc-button__loader--show' : ''}`}
		/>
	);
	let body;
	if (children) body = [loaderComp, children];
	else body = [loaderComp, iconComp, textComp];
	if (isLink)
		return (
			<Link to={to} type={kind} target={target} disabled={disabled} className={classes}>
				<div className="d-flex justify-content-center align-items-center">{body}</div>
			</Link>
		);
	else
		return (
			<button type={kind} disabled={disabled} onClick={onClick} className={classes}>
				<div className="d-flex justify-content-center align-items-center">{body}</div>
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
