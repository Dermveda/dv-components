## About
A simple button used to execute an action

## Usage
Your only able to pass [aria](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
attributes to this component in terms of props outside of the custom proptypes definition

```javascript
import { Atoms } from '@dnovicki/dv-components';

<Atoms.Button onClick={() => { console.log('clicked!'); }}>
	Hi! I am a button!
</Atoms.Button>
```

## Custom PropTypes
| property | propType | required | default | description                                      |
|:---------|:---------|:---------|:--------|:-------------------------------------------------|
| onClick  | function | true     |         | action to execute on click                       |
| large    | boolean  | false    | false   | changes button size                              |
| small    | boolean  | false    | false   | changes button size                              |
| type     | string   | false    | primary | see button types above                           |
| gradient | boolean  | false    | false   | adds a gradient to the background color          |
| nostyle  | boolean  | false    | false   | removes any styling from the button              |
| raised   | boolean  | false    | false   | adds a raised effect to the button               |
| squared  | boolean  | false    | false   | removes border radius from button                |
| white    | boolean  | false    | false   | adds white colors to button                      |
| outline  | boolean  | false    | false   | removes the background color and uses an outline |

## Button Types
### Primary
Used for primary actions, should be the most common button type. Two primary actions should not be placed side by side. Instead use a primary button and a secondary button next to it.

### Secondary
Used for secondary actions, useful when next to a primary action such as a cancel action next to a submit action.

### Bold
USE SPARINGLY. This should only be used when selling stuff extremely strongly. Read this button as if you are screaming to someone that you should do it.

## Style Information
### Gradient
Gradients should be used sparingly. Primary actions or CTAs work well for here. Suggested usage would be only for the primary action on a page or home page repetition. Only one should be visible on the page at a time.

### Raised
Typically this should be used in conjunction with gradient and the same rules apply.

### No Style
No style should be used when a button is a tertiary action on a page. For instance, a read more action that is out in the open.

### Squared
Useful for inline forms and when the button is placed next to a component. Don't use by itself, only when the button is against another element

### Outline
Useful for making a button very subtle on the page. Used when multiple primary actions will
be visible on the page, and should be used instead of a solid button so there aren't too many
primary actions that take priority.
