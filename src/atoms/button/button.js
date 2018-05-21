import styled from 'styled-components';
import PropTypes from 'prop-types';
import { buttonCSS, buttonAttributes } from './button-styles';
import tag from 'clean-tag';

export const buttonProps = {
	type: PropTypes.oneOf(['primary', 'secondary', 'bold', 'tertiary']),
	gradient: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	outline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	nostyle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	squared: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	large: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	small: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	raised: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export const buttonDefaultProps = {
	type: 'primary',
	raised: 'false',
	nostyle: 'false',
	gradient: 'false',
	outline: 'false',
	squared: 'false',
	large: 'false',
	small: 'false'
};

const Button = styled(tag.button).attrs(buttonAttributes)`
	${buttonCSS};
`;

Button.propTypes = buttonProps;

Button.defaultProps = buttonDefaultProps;

export default Button;
