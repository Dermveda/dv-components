## About
Icon circles should be used as a bullet point or to highlight a section. Be careful when using this large
as the icons are not meant to be used as a large bullet point use a graphic instead of making a super large
bullet icon for instance.

Icons in this library uses icons from [Nucleo](https://nucleoapp.com/premium-icons).
The icon library will output an `SVG` that can be manipulated.

To see available icons, see the story knobs icon name dropdown.

## Usage
Icon descriptions and titles should be used when the icon has [semantic value](https://en.wikipedia.org/wiki/Semantic_HTML).
Otherwise, add the [aria-hidden](https://www.w3.org/WAI/standards-guidelines/aria/) attribute.

~~~javascript
import { Atoms } from '@dnovicki/dv-components';

<Atoms.IconCircle name="rightArrow" type="outline" color="white" />
~~~

## Styled System Utilities
* [color](https://jxnblk.com/styled-system/api#color-responsive)
* [space](https://jxnblk.com/styled-system/api#space-responsive)
* [display](https://jxnblk.com/styled-system/api#layout)

## Custom PropTypes
| property    | propType | required | default | description                                                                      |
|:------------|:---------|:---------|:--------|:---------------------------------------------------------------------------------|
| title       | string   | false    | null    | [svg title](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title)      |
| description | string   | false    | null    | [svg description](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc) |
| name        | string   | true     |         | icon to use see available icons in story knobs                                   |
| type        | string   | false    | glyph   | one of colored, glyph, colored                                                   |
| strokeSize  | number   | false    | 2       | stroke width for outline icons                                                   |
| iconSize    | string   | false    | md      | one of xs, sm, md, lg, xl                                                        |
| background  | string   | false    | primary | one of primary, secondary, or tertiary                                           |
| rotate      | string   | false    | null    | sets the rotation in degrees                                                     |
