import styled from 'styled-components';
import { hideVisually } from 'polished';

const HiddenText = styled.span`
	${hideVisually()};
`;

export default HiddenText;
