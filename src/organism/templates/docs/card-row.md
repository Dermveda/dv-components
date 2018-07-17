## About

A listing of articles used for templates

- [x] Allows Skeleton Loading

## Usage
Render footer is passed the props that are defined in footer props. These props are [plucked](https://ramdajs.com/docs/#pluck) from
the articles object. The render footer function then can be given a function that returns a JSX object that will render underneath the
article title.


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

<Organisms.CardRow
	description="Something of a description can go here"
	headerAttributes={{
		title: 'Article List',
		buttonAttributes: {
			to: '/more-articles',
			text: 'View More'
		}
	}}
	showAll={false}
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
| property         | propType         | required | default | description                                                                                       |
|:-----------------|:-----------------|:---------|:--------|:--------------------------------------------------------------------------------------------------|
| articles         | [articles]       | true     |         | array of articles to list                                                                         |
| description      | string           | false    |         | text that appears underneath the article list header                                              |
| headerAttributes | headerAttributes | false    | null    | attributes that are passed directly to the article list header                                    |
| footerProps      | [string]         | true     |         | array of strings that are props plucked from the article object to be passed to render footer     |
| renderFooter     | function         | true     |         | a function that is given props from footerProps that will appear under each article object        |
| showAll          | boolean          | false    | false   | normally the listing of cards is limited to three, this will create unlimited amount of card rows |

### articles
| property        | propType        | required | default | description                                                       |
|:----------------|:----------------|:---------|:--------|:------------------------------------------------------------------|
| title           | string          | true     |         | title of article                                                  |
| to              | string          | true     |         | internal link to article                                          |
| imageAttributes | imageAttributes | true     |         | image information                                                 |
| subtitle        | string          | false    | null    | subtitle text to appear above article title                       |
| subtitle link   | string          | false    | null    | link that wraps around the subtitle (typically for category urls) |
| description     | string          | false    | null    | text to appear underneath the title                               |

### imageAttributes
Any [valid img attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) can be passed to this object to an img tag.

| property | propType | required | default | description    |
|:---------|:---------|:---------|:--------|:---------------|
| src      | string   | true     |         | image url      |
| alt      | string   | true     |         | image alt text |

### headerAttributes
Attributes that are passed directly to the article list header (the bar the appears above the listing of articles)
| property         | propType         | required | default | description                                                                              |
|:-----------------|:-----------------|:---------|:--------|:-----------------------------------------------------------------------------------------|
| title            | string           | false    | null    | text that appears on the left side of the bar                                            |
| buttonAttributes | buttonAttributes | false    | null    | button attributes passed to the button element that appears on the right side of the bar |

### buttonAttributes
one of href or to is required

| property | propType | required | default | description                       |
|:---------|:---------|:---------|:--------|:----------------------------------|
| to       | string   | X        |         | internal url for link             |
| href     | string   | X        |         | external url for link             |
| text     | string   | true     |         | string that appears in the button |
