## About
A select component that uses the [react-select V2 library](https://github.com/JedWatson/react-select)
All attributes are passed down to this library, so if you want to view implementation, follow the
docs there. All the component does is style icons and such with custom components.

## Usage
For additional props please read the [react-select V2 documentation](https://deploy-preview-2289--react-select.netlify.com/props)

```javascript
import { Atoms } from '@dnovicki/dv-components';

<Atoms.Select name="example" options={[
	{ label: 'First Item', value: '1' },
	{ label: 'Second Item', value: '2' },
	{ label: 'Third Item', value: '3' }
]} />
```

## Custom PropTypes
| property | propType | required | default | description                             |
|:---------|:---------|:---------|:--------|:----------------------------------------|
| gray     | boolean  | false    | false   | Adds gray background and removes border |
