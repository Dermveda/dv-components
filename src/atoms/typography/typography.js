import styled from 'styled-components';
import { space } from 'styled-system';
import { fontSize } from 'utils';

export const H3 = styled.h3.attrs({
	fontSize: [2, 3, 3],
	m: 0,
	pb: 3
})`
	${space};
	${fontSize};

	line-height: 1;
`;

export const Subtitle = styled.h4.attrs({
	fontSize: [0, 1],
	m: 0,
	pb: 2
})`
	${space};
	${fontSize};

	letter-spacing: .03rem;
	text-transform: uppercase;
	line-height: 1;
`;
