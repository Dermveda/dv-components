## About
A simple navigational bar that is sticky to the top of the page.

## Styled System Utilities
* [color](https://jxnblk.com/styled-system/api#color-responsive)
* [space](https://jxnblk.com/styled-system/api#space-responsive)
* [flexDirection](https://jxnblk.com/styled-system/api#flexbox)
* [justifyContent](https://jxnblk.com/styled-system/api#flexbox)
* [display](https://jxnblk.com/styled-system/api#layout)

## Custom PropTypes
| property  | propType | required | default | description                                                                                |
|:----------|:---------|:---------|:--------|:-------------------------------------------------------------------------------------------|
| top       | number   | false    | 0       | distance from top [css top property](https://developer.mozilla.org/en-US/docs/Web/CSS/top) |
| zIndex    | number   | false    | 100     | z-index of object [css z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)  |
| navBorder | boolean  | false    | false   | includes nav border styles (see story)                                                     |

## Usage

```javascript
import { Atoms } from '@dnovicki/dv-components';
<Atoms.Bar>
	Nav items go here.
</Atoms.Bar>
```
