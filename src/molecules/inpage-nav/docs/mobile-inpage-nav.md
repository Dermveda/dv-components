## About

Mobile inpage nav is a non-responsive utility that is used for internal page linking for section content.

This uses a combination of [react-scroll](https://github.com/fisshy/react-scroll). Checkout their documentation for more info on scroll `Element`.

## Usage

```javascript
import { Molecules } from '@dnovicki/dv-components';
import { Element } from 'react-scroll';

<Molecules.MobileInPageNav
	links={[
		{ to: 'section-1', text: 'Section One' },
		{ to: 'section-2', text: 'Section Two' }
	]}
/>
<Element name="section-1"> First Section </Element>
<Element name="section-2"> Second Section </Element>
```

## Custom PropTypes
| property | propType | required | default | description                        |
|:---------|:---------|:---------|:--------|:-----------------------------------|
| links    | links    | true     |         | array of links for internal scroll |

### links
| property | propType | required | default | description                                                                                 |
|:---------|:---------|:---------|:--------|:--------------------------------------------------------------------------------------------|
| to       | string   | true     |         | string that corresponds to a [react-scroll element](https://github.com/fisshy/react-scroll) |
| text     | string   | true     |         | display text for the link                                                                   |
