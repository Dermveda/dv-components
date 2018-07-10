## About
An animated dropdown icon that transitions to open and not open

## Styled System Utilities
* [color](https://jxnblk.com/styled-system/api#color-responsive)
* [space](https://jxnblk.com/styled-system/api#space-responsive)
* [hover](http://jxnblk.com/styled-system/api/#hover)

## Custom PropTypes
| property | propType | required | default | description           |
|:---------|:---------|:---------|:--------|:----------------------|
| isOpen   | boolean  | false    | false   | toggles dropdown icon |

## Usage

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
