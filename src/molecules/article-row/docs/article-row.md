## About

Article row used for listing of information in a grid pattern similar to medium's right aligned
article, image content.

- [x] Has skeleton loading

## Usage

```javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.ArticleRow
	title="Test Title"
	description="Simple article description"
	imageAttributes={{
		src: 'http://fillmurray.com/1280/720',
		alt: 'test'
	}}
>
	Fusce rhoncus risus vitae tellus tincidunt, non
</Molecules.ArticleRow>
```

## Custom PropTypes
| property        | propType | required | default | description                                      |
|:----------------|:---------|:---------|:--------|:-------------------------------------------------|
| title           | string   | true     |         | Title of article                                 |
| subtitle        | string   | false    | null    | subtitle that appears above article row          |
| subtitleLink    | string   | false    | null    | relative link for subtitles                      |
| description     | string   | false    | null    | brief article description                        |
| children        | node     | false    | null    | footer content for article                       |
| to              | string   | false    | null    | relative path to article link (react-router-dom) |
| imageAttributes | object   | false    | {}      | image attributes                                 |

### imageAttributes
Additional attributes can be passed to the image such as html attributes.

| property | propType | required | default | description      |
|:---------|:---------|:---------|:--------|:-----------------|
| src      | string   | true     |         | image url source |
| alt      | string   | true     |         | image alt tag    |
