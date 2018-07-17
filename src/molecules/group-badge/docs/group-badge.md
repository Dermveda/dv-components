## About

Listing of group badges, if badge count is more than 3, then show 3 items "+ More"

- [x] Has Skeleton Loading

## Usage
Additional props can be passed down to this element, see the FlexBox Atom for more information.

~~~javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.GroupBadge
	attributeListing={['item 1', 'item2']}
	label="Simple Title"
/>
~~~

## Custom PropTypes
| property         | propType | required | default | description                  |
|:-----------------|:---------|:---------|:--------|:-----------------------------|
| label            | string   | false    | null    | Badge listing title          |
| attributeListing | [string] | true     |         | array of string to be badges |
