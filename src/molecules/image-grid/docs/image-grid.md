## About
A column view of image and content that breaks down to a flex column

- [x] Has skeleton loading

## Usage
Any props passed to the `imageAttributes` attribute will be passed down to the image tag.

~~~javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.ImageGrid
	imageAttributes={{
		src: 'http://fillmurray.com/500/300',
		alt: ''
	}}
	direction="left"
>
	Maecenas efficitur sed urna porttitor dictum. Mauris varius est eu libero consectetur
	pretium. Etiam enim neque, pellentesque id fringilla non, accumsan vel magna.
</Molecules.ImageGrid>
~~~

## Custom PropTypes
| property        | propType | required | default | description                                                   |
|:----------------|:---------|:---------|:--------|:--------------------------------------------------------------|
| imageAttributes | object   | true     |         | image attributes for image tag                                |
| children        | node     | true     |         | child data to be in the column                                |
| direction       | string   | false    |         | one of "left" or "right" changes the direction of the columns |

### imageAttributes
| property | propType | required | default | description         |
|:---------|:---------|:---------|:--------|:--------------------|
| src      | string   | true     |         | image url source    |
| alt      | string   | true     |         | image attribute tag |
