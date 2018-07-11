## About

A listing of icons and text, useful for listing out information in a consise manner such as
time to complete a course or how many credits a course provides.

- [ ] Has Skeleton Loading

## Usage
Additional props can be passed down to this element, see the FlexBox Atom for more information.

~~~javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.IconAttributes
	attributeListing={[
		{
			iconAttributes: { name: 'clock' },
			label: 'Time',
			text: '3 hrs'
		},{
			iconAttributes: { name: 'award' },
			label: 'CME Credits',
			text: '0.75 Credits'
		}
		,{
			iconAttributes: { name: 'price' },
			label: 'Price',
			text: 'Free'
		}
	]}
/>
~~~

## Custom PropTypes
| property         | propType         | required | default | description                    |
|:-----------------|:-----------------|:---------|:--------|:-------------------------------|
| attributeListing | attributeListing | true     |         | listing of icons and labels    |
| small            | boolean          | false    | false   | use smaller font and icon size |
| column           | boolean          | false    | false   | stack icons and labels         |

### attributeListing
| property       | propType       | required | default | description                            |
|:---------------|:---------------|:---------|:--------|:---------------------------------------|
| iconAttributes | iconAttributes | true     |         | attributes for the icon                |
| label          | string         | true     |         | label description for the icon sr-only |
| text           | string         | false    | null    | display text to appear next to label   |

### iconAttributes
| property | propType | required | default | description                                   |
|:---------|:---------|:---------|:--------|:----------------------------------------------|
| name     | string   | true     |         | icon name, see icon story for available icons |
