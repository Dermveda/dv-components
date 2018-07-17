## About

A listing of articles used for templates

- [x] Allows Skeleton Loading

## Usage

```javascript
import { Organisms } from '@dnovicki/dv-components';

const article = {
	_id: '59ead04ac9ad306351f29a7c',
	title: 'Overview of Philosophy and Approach of Naturopathic Skin Therapies',
	author: 'John Doe',
	to:'/article-link',
	imageAttributes: {
		src: 'https://res.cloudinary.com/dermveda/image/upload/q_auto,f_auto,dpr_auto,w_900,c_limit/v1502729866/posts/image/unexpected-ways-in-which-runing-can-affect-your-skin.jpg',
		alt: 'test'
	},
	subtitle: 'This is a subtitle :)',
	subtitleLink: '/something',
	description: 'Nunc sem nisi, faucibus non magna a, egestas varius dolor. Maecenas metus ex, feugiat ut pulvinar eu, convallis a lectus. Nunc laoreet accumsan tortor nec venenatis. Pellentesque eu mi leo.'
};

<Organisms.RowListing
	description="Something of a description can go here"
	headerAttributes={{
		title: 'Article List',
		buttonAttributes: {
			to: '/more-articles',
			text: 'View More'
		}
	}}
	articles={[article, article, article]}
	footerProps={['author', '_id']}
	renderFooter={({ author, _id })} => (
		<div>
			{author && <p>{author}</p>}
			{_id && <p>{_id}</p>}
		</div>
	)}
/>
```

## Custom PropTypes
| property    | propType   | required | default | description               |
|:------------|:-----------|:---------|:--------|:--------------------------|
| articles    | [articles] | true     |         | array of articles to list |
| description | string     | false    |         |                           |
