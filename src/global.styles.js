import { injectGlobal } from 'styled-components';
import { normalize, darken } from 'polished';

/* eslint-disable */
injectGlobal`
	${normalize(true)};

	a {
		text-decoration: none;
		color: #668CFF;

		&:hover {
			color: ${darken(0.2, '#668CFF')};
		}

		&:active {
			color: #668CFF;
		}
	}

	body {
		WebkitFontSmoothing: 'antialiased';
		line-height: 1.5;
		font-weight: 400;
		font-size: 1.092rem;
		color: #212529;
		text-align: left;
		background-color: white;
	}

	[tabindex="-1"]:focus {
	  outline: 0 !important;
	}

	h1, h2, h3, h4, h5, h6 {
	  margin-bottom: 0.5rem;
	  font-family: inherit;
	  font-weight: 500;
	  line-height: 1.25;
	  color: inherit;
	}

	h1, .h1 {
	  font-size: 2.5rem;
	}

	h2, .h2 {
	  font-size: 2rem;
	}

	h3, .h3 {
	  font-size: 1.75rem;
	}

	h4, .h4 {
	  font-size: 1.5rem;
	}

	h5, .h5 {
	  font-size: 1.25rem;
	}

	h6, .h6 {
	  font-size: 1rem;
	}

	strong {
		font-weight: 700;
	}

	.menu-aim {
  width: 300px;
}
.menu-aim__item {
  position: relative;
  width: 300px;
}
.menu-aim a {
  display: block;
  color: blue;
}
.menu-aim a:hover,
.menu-aim__item--active .menu-aim__item-name {
  color: white;
  background: blue;
}
.menu-aim--delaying .menu-aim__item-name:hover {
  color: blue;
  background: none;
}
.menu-aim__item-submenu {
  display: none;
  position: absolute;
  top: 0;
  left: 300px;
  width: 300px;
}
.menu-aim__item--active .menu-aim__item-submenu {
  display: block;
}
`;
