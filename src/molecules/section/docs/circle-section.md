## About

A section container with title information

## Usage

```javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.CircleSection
	title="Why LearnSkin"
	content
	centered
	circleText="Hi there!"
>
	Lorem ipsum dolor sit amit
</Molecules.CircleSection>
```

## Custom PropTypes
| property         | propType         | required | default | description                                                          |
|:-----------------|:-----------------|:---------|:--------|:---------------------------------------------------------------------|
| is               | string           | false    | div     | default html type for section container                              |
| imageAttributes  | imageAttributes  | false    | null    | image to appear above section title                                  |
| title            | string           | false    | null    | section title text                                                   |
| titleAttributes  | titleAttributes  | false    |         | attributes to be passed to title component                           |
| buttonAttributes | button props     | false    |         | see button atom for information                                      |
| type             | string           | false    | white   | background color of section one of white, gray, primary, or tertiary |
| bodyAttributes   | bodyAttributes   | false    | {}      | attributes to pass to the children container                         |
| children         | node             | false    | null    | children to appear in section                                        |
| circleAttributes | circleAttributes | false    |         | circle portion of section                                            |

### circleAttributes
| property | propType | required | default | description              |
|:---------|:---------|:---------|:--------|:-------------------------|
| text     | string   | true     |         | text to appear in circle |

#### Styled System Utilities
* [color](https://jxnblk.com/styled-system/api#color-responsive)

### imageAttributes
any other img tag props will work

| property | propType | required | default | description    |
|:---------|:---------|:---------|:--------|:---------------|
| img      | string   | true     |         | image url      |
| alt      | string   | true     |         | image alt text |

### titleAttributes
| property | propType | required | default | description                       |
|:---------|:---------|:---------|:--------|:----------------------------------|
| is       | string   | false    | h2      | change the html type of the title |
| fontSize |          | false    | [4, 5]  | set the font size of the title    |

#### Styled System Utilities
* [color](https://jxnblk.com/styled-system/api#color-responsive)
* [textAlign](https://jxnblk.com/styled-system/api#typography)
* [fontFamily](https://jxnblk.com/styled-system/api#typography)
* [lineHeight](https://jxnblk.com/styled-system/api#typography)
* [fontSize](https://jxnblk.com/styled-system/api#fontsize)

### bodyAttributes
| property | propType | required | default | description                    |
|:---------|:---------|:---------|:--------|:-------------------------------|
| fontSize |          | false    | [1, 2]  | set the font size of the title |

#### Styled System Utilities
* [color](https://jxnblk.com/styled-system/api#color-responsive)
* [flex](https://jxnblk.com/styled-system/api#flexbox)
* [flexWrap](https://jxnblk.com/styled-system/api#flexbox)
* [flexDirection](https://jxnblk.com/styled-system/api#flexbox)
* [justifyContent](https://jxnblk.com/styled-system/api#flexbox)
* [alignItems](https://jxnblk.com/styled-system/api#flexbox)
* [width](https://jxnblk.com/styled-system/api#layout)
* [space](https://jxnblk.com/styled-system/api#space)
* [fontSize](https://jxnblk.com/styled-system/api#fontsize)
