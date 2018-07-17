## About

List item for sectioning out content in a series. Useful for adding visual flair for content that's more
than just listing out content

- [ ] Has skeleton loading

## Usage

```javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.BulletListItem
	title="Test"
	iconAttributes={{
		name: 'rightArrow',
		type; 'primary'
	}}
>
	Lorem ipsum dolor sit amit
</Molecules.BulletListItem>
```

## Custom PropTypes
| property         | propType         | required | default        | description                         |
|:-----------------|:-----------------|:---------|:---------------|:------------------------------------|
| title            | string           | true     |                | list item title                     |
| children         | node             | true     |                | content underneath title            |
| iconAttributes   | iconAttributes   | true     |                | icon information for bullet item    |
| buttonAttributes | buttonAttributes | false    | { text: null } | button that appears below icon list |

### iconAttributes
| property    | propType | required | default | description                                                                      |
|:------------|:---------|:---------|:--------|:---------------------------------------------------------------------------------|
| value       | number   | true     |         | icon value                                                                       |
| title       | string   | false    | null    | [svg title](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title)      |
| description | string   | false    | null    | [svg description](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc) |
| name        | string   | true     |         | icon to use see available icons in story knobs                                   |
| type        | string   | false    | glyph   | one of colored, glyph, colored                                                   |
| strokeSize  | number   | false    | 2       | stroke width for outline icons                                                   |
| iconSize    | string   | false    | md      | one of xs, sm, md, lg, xl                                                        |
| background  | string   | false    | primary | one of primary, secondary, or tertiary                                           |
| rotate      | string   | false    | null    | sets the rotation in degrees                                                     |

### buttonAttributes
one of to, href, or onClick is required

| property | propType | required | default | description            |
|:---------|:---------|:---------|:--------|:-----------------------|
| text     | string   | false    |         | button text            |
| onClick  | function | X        |         | onClick event function |
| to       | string   | X        |         | local path url         |
| href     | string   | X        |         | external url           |
