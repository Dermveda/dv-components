## About
An animated dropdown icon that transitions to open and not open

## Styled System Utilities
* [color](https://jxnblk.com/styled-system/api#color-responsive)
* [space](https://jxnblk.com/styled-system/api#space-responsive)
* [hover](http://jxnblk.com/styled-system/api/#hover)

## Custom PropTypes
| property    | propType | required | default | description                                                                      |
|:------------|:---------|:---------|:--------|:---------------------------------------------------------------------------------|
| isOpen      | boolean  | false    | false   | toggles dropdown icon                                                            |
| property    | propType | required | default | description                                                                      |
| title       | string   | false    | null    | [svg title](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title)      |
| description | string   | false    | null    | [svg description](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc) |
| name        | string   | true     |         | icon to use see available icons in story knobs                                   |
| type        | string   | false    | glyph   | one of colored, glyph, colored                                                   |
| strokeSize  | number   | false    | 2       | stroke width for outline icons                                                   |
| iconSize    | string   | false    | md      | one of xs, sm, md, lg, xl                                                        |
| rotate      | string   | false    | null    | sets the rotation in degrees                                                     |

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
		<Atoms.Button onClick={this.toggleDropdown}>
			Toggle Chevron
			<Atoms.ChevronDown isOpen={this.state.open} />
		</Atoms.Button>
	)
}
```
