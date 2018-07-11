## About

Call to actions are [asides](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) that should
be used in order to callout something such as advertise or highlight a new event.

- [x] Has Skeleton Loading

## Usage
Additional props can be passed down to this element, see the FlexBox Atom for more information.

~~~javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.CallToAction
	title="Annual Symposium"
	buttonProps={{
		text: 'Register Today',
		onClick: () => { console.log('clicked!'); }
	}}
>
	Attend the world first annual integrative Dermatology Symposium in Sacramento on
	October 19-21st, 2018
</Molecules.CallToAction>
~~~

## Custom PropTypes
| property    | propType | required | default | description                                         |
|:------------|:---------|:---------|:--------|:----------------------------------------------------|
| title       | string   | true     |         | title of call to action                             |
| buttonProps | object   | true     |         | button props to be passed to the button (see below) |
| children    | node     | true     |         | additional information to be passed to cta          |

### buttonProps
One of `onClick`, `to`, or `href` is required

| property | propType | required | default | description           |
|:---------|:---------|:---------|:--------|:----------------------|
| text     | string   | true     |         | button text           |
| onClick  | function | X        | null    | on click button event |
| to       | string   | X        | null    | internal link         |
| href     | string   | X        | null    | external url          |
