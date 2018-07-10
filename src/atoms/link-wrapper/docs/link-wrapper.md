## About
Link wrapper that takes a child component and wraps it in an internal link if a to prop is passed to the element. If no to prop is passed to the `LinkWrapper` then it is wrapped in a [React Fragment](http://reactjs.org/docs/fragments.html) instead.

## Usage

### With internal link
```javascript
import { Atoms } from '@dnovicki/dv-components';

<Atoms.LinkWrapper to="/tester">
	<div>i am a link</div>
</Atoms.LinkWrapper>
```

this will output the following html:
```html
<a href="http://localhost/tester">
	<div>i am a link</div>
</a>
```

### Without internal Link
```javascript
import { Atoms } from '@dnovicki/dv-components';

<Atoms.LinkWrapper>
	<div>i am just a div</div>
</Atoms.LinkWrapper>
```

this will output the following html:
```html
<div>i am just a div</div>
```

## Custom PropTypes
| property | propType | required | default | description                          |
|:---------|:---------|:---------|:--------|:-------------------------------------|
| to       | string   | false    | null    | internal link using react-router-dom |
| children | node     | true     |         | wrapped element                      |
