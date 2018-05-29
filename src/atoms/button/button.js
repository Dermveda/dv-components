import styled from 'styled-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import tag from 'clean-tag';
import {
	buttonProps, buttonDefaultProps, buttonCSS, buttonAttributes
} from './button-styles';

const makeButton = styled(tag.button).attrs(buttonAttributes)`
	${buttonCSS}
`;
const Button = createSkeletonElement(makeButton);

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;

export default Button;
