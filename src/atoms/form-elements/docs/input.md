## About
Simple form input `<input>`

## Usage
You can pass all [available html attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) for the input tag in addition to the custom props detailed below.

```javascript
import { Atoms } from '@dnovicki/dv-components';

<Atoms.Input type="email" name="email" />
```

## Styled System Utilities
* [space](https://jxnblk.com/styled-system/api#space-responsive)
* [fontSize](http://jxnblk.com/styled-system/api#fontsize-responsive)
* [width](http://jxnblk.com/styled-system/api#layout)
* [height](http://jxnblk.com/styled-system/api#layout)
* [minWidth](http://jxnblk.com/styled-system/api#layout)
* [maxWidth](http://jxnblk.com/styled-system/api#layout)

## Custom PropTypes
| property | propType | required | default | description                             |
|:---------|:---------|:---------|:--------|:----------------------------------------|
| large    | boolean  | false    | false   | Makes input box large                   |
| gray     | boolean  | false    | false   | Adds gray background and removes border |

## When to use gray input
Use the gray input only when the element is on a white background to avoid using borders.
