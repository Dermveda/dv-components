## About
Form label `<label>`

## Usage
You can pass all [available html attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) for the input tag in addition to the custom props detailed below.

```javascript
import { Atoms } from '@dnovicki/dv-components';

<Atoms.Label>Html Label Text</Atoms.Label>
```

### Usage with input
```javascript
import { Atoms } from '@dnovicki/dv-components';

// use htmlFor as well as wrap the input item in a value
<Atoms.Label htmlFor="email">
	<Atoms.Input id="email" name="email" type="email" required />
</Atoms.Label>
```

## Styled System Utilities
* [color](https://jxnblk.com/styled-system/api#color-responsive)
* [space](https://jxnblk.com/styled-system/api#space-responsive)
* [fontSize](http://jxnblk.com/styled-system/api#fontsize-responsive)

## When to use gray input
Use the gray input only when the element is on a white background to avoid using borders.
