# Dermveda Components

Components used by [learnskin](http://learnskin.com) and [dermveda](http://dermveda.com)

## Getting Started

### Install the component library

```shell
npm install @dnovicki/dv-components
```

```javascript
// App.js
import React from 'react';
import { Atoms } from '@dnovicki/dv-components';

const App = () => (
	<h1>Hi</h1>
	<Atoms.Button onClick=({ () => alert('yay!'); })>
		Click Me!
	</Atoms.Button>
);

export default App;
```

### View Available components

```shell
npm run storybook
open localhost:6007
```


## Background Learning

### Styled Components
The basis for the entire library. All components are built on styled components as the base, with some slight tools to make overall implementations easier. The idea behind styled components is one of [css-in-js](https://hackernoon.com/all-you-need-to-know-about-css-in-js-984a72d48ebc).

* [Egg Head Tutorials](https://egghead.io/playlists/styled-components-1af2dd10)
* [Official Documentation](https://www.styled-components.com/)

### Styled System
A library that adds base utilities such as padding, margins, colors. This is based on a theme that is passed down by the theme provider. The [Theme Table](https://jxnblk.com/styled-system/table) details which function names relate to which theme field.

* [Official Documentation](https://github.com/jxnblk/styled-system)

### System Components
A wrapper for styled system that allows for object declaration. This allows for less code when a component is basically just an extension of styled system. System components also exposes the `is` prop, which allows us to change the tag on the fly. This is useful if you want to make something a `h1` tag. A common pattern in the component library is to expose some attribute like `titleAttributes` allow the `is` prop to be passed in to the element.

#### Before
```js
	import styled from 'styled-components';
	import { space } from 'styled-system';
	const Card = styled.section.attrs({
		p: 3
	})`
		${space};
	`
```

#### After
```js
	import sys from 'system-components';
	const Card = sys({
		p: 3,
		is: 'section'
	});
```

* [Official Documentation](https://github.com/jxnblk/styled-system/tree/master/system-components)
