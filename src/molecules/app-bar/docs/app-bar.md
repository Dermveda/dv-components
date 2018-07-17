## About

An app bar that is used for mobile views. Has the ability to include children for CTAs such as
for sign ups.

The component will be sticky top and will scroll with the page.

- [ ] Allows Skeleton Loading

## Usage

```javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.AppBar
	title="LearnSkin"
	logo="http://fillmurray.com/150/32"
	to="/path"
>
	Right aligned child
</Molecules.AppBar>
```

## Styled System Utilities
* [space](https://jxnblk.com/styled-system/api#space-responsive)

## Custom PropTypes
| property | propType | required | default | description                                   |
|:---------|:---------|:---------|:--------|:----------------------------------------------|
| children | node     | false    |         | right aligned elements                        |
| logo     | string   | true     |         | image source for logo                         |
| to       | string   | false    | null    | relative link that wraps the image            |
| title    | string   | true     |         | title of page that will be h1 (e.g. Dermveda) |
