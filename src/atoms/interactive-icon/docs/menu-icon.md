## About
An animated menu icon that toggles between a hamburger icon and a close icon

## Usage
Icon descriptions and titles should be used when the icon has [semantic value](https://en.wikipedia.org/wiki/Semantic_HTML).
Otherwise, add the [aria-hidden](https://www.w3.org/WAI/standards-guidelines/aria/) attribute.

```javascript
import React, { Component } from 'react';
import { Atoms } from '@dnovicki/dv-components';

export default class Toggler extends Component {
	state = { open: false }

	toggleDropdown = () => this.setState(({ toggler }) => ({ toggler: !toggler }));

	render = () => (
		<div>
			{this.state.open && <div>menu open</div>}
			<Atoms.MenuIcon onClick={this.toggleDropdown} />
		</div>
	)
}
```

## Custom PropTypes
| property    | propType | required | default | description                                                                      |
|:------------|:---------|:---------|:--------|:---------------------------------------------------------------------------------|
| isDismiss   | boolean  | false    | false   | force set the close/open state                                                   |
| onClick     | function | true     |         | toggles the menu on click                                                        |
| title       | string   | false    | null    | [svg title](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title)      |
| description | string   | false    | null    | [svg description](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc) |
| type        | string   | false    | glyph   | one of colored, glyph, colored                                                   |
| strokeSize  | number   | false    | 2       | stroke width for outline icons                                                   |
| iconSize    | string   | false    | md      | one of xs, sm, md, lg, xl                                                        |
| rotate      | string   | false    | null    | sets the rotation in degrees                                                     |
