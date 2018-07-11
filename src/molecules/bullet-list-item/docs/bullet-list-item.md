## About

List item for sectioning out content in a series. Useful for number sequences (1, 2, 3)

- [ ] Has skeleton loading

## Usage

```javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.BulletListItem
	title="Test"
	listOrderAttributes={{
		value: 3,
		type: 'tertiary'
	}}
>
	Lorem ipsum dolor sit amit
</Molecules.BulletListItem>
```

## Custom PropTypes
| property            | propType            | required | default        | description                                           |
|:--------------------|:--------------------|:---------|:---------------|:------------------------------------------------------|
| title               | string              | true     |                | list item title                                       |
| children            | node                | true     |                | content underneath title                              |
| listOrderAttributes | listOrderAttributes | X        |                | one of listOrderAttributes or iconAttributes required |
| buttonAttributes    | buttonAttributes    | false    | { text: null } | button that appears below icon list                   |

### listOrderAttributes
| property | propType | required | default | description        |
|:---------|:---------|:---------|:--------|:-------------------|
| value    | number   | true     |         | bullet point value |

### buttonAttributes
one of to, href, or onClick is required

| property | propType | required | default | description            |
|:---------|:---------|:---------|:--------|:-----------------------|
| text     | string   | false    |         | button text            |
| onClick  | function | X        |         | onClick event function |
| to       | string   | X        |         | local path url         |
| href     | string   | X        |         | external url           |
