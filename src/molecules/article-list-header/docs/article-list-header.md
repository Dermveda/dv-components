## About
A list header that has a read more link that goes to the rest of the content.

- [x] Allows Skeleton Loading

## Usage

```javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.ArticleListHeader
	title="test"
	buttonAttributes={{
		text: 'Read More',
		to: '/'
	}}
/>
```

## Custom PropTypes
| property         | propType | required | default | description                         |
|:-----------------|:---------|:---------|:--------|:------------------------------------|
| title            | string   | true     |         | Article header title                |
| buttonAttributes | object   | true     |         | attributes for the button component |

### buttonAttributes
| property | propType | required | default | description                       |
|:---------|:---------|:---------|:--------|:----------------------------------|
| text     | string   | true     |         | button text                       |
| to       | string   | true     |         | local link using react-router-dom |
