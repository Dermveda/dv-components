import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

/* eslint-disable */
injectGlobal`
	${normalize(true)};

	body {
		WebkitFontSmoothing: 'antialiased';
	}
`;
