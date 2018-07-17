## About

A video player that allows for clicking and expanding the information.

## Usage
```javascript
import { Molecules } from '@dnovicki/dv-components';

<Molecules.VideoSection
	titleAttributes={{
		text: 'Watch the Video'
	}}
	img="http:fillmurray.com/100/100"
	description="Or learn how the whole process works"
	videoUrl="https://www.youtube.com/embed/IWns8-YQVko?rel=0&amp;showinfo=0&autoplay=1"
/>
```

## Styled System Utilities
See FlexBox for available utilties


## Custom PropTypes

| property        | propType        | required | default | description                                              |
|:----------------|:----------------|:---------|:--------|:---------------------------------------------------------|
| titleAttributes | titleAttributes | true     |         | attributes passed to the title of the section            |
| img             | string          | true     |         | image background of video player button                  |
| description     | string          | false    | null    | description to appear under the title                    |
| videoUrl        | string          | true     |         | url of video preferably youtube video with autoplay flag |

### titleAttributes

Able to pass in more utilties. See the H3 Component in typography for more information.

| property | propType | required | default | description                      |
|:---------|:---------|:---------|:--------|:---------------------------------|
| title    | string   | true     |         | text of to display for the title |
