import styled from 'styled-components';
import { space } from 'styled-system';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { fontSize } from 'utils';

const makeBadge = styled.div.attrs({
	fontSize: 1,
	py: 1,
	px: 3
})`
	display: inline-block;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	color: #2b2b2b;
	margin: 0 4px;
	${space};
	${fontSize};

	&:first-of-type {
		margin-left: 0;
	}

	&:last-of-type {
		margin-right: 0;
	}
`;

const Badge = createSkeletonElement(makeBadge);
export default Badge;
