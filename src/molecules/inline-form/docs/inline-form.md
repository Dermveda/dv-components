## About

Inline forms should be used when there is a single action to be entered and to be submitted.
Note, that this doesn't necessarily have to be the final state, it could be an initial action that
is then redirected to the final output. The final form entries should be on a new page with the
input from this form prefilled or at least displayed.

### Examples
* Sign up start form, on submit redirects to sign up page with email prefilled.
* Newsletter sign up

## Usage

### Non Promise Submit

Using this type of form, if the result of onSubmit is immediate then no setting of loading or
success props need to be done. However, if the call is async, then set the success and loading props
manually based on the current status. It is recommended to **use promise submit** if this is the
case though.

```javascript
import { Molecules } from '@dnovicki/dv-components';

/**
 * @param  {String} value value of input
 */
const submitForm = (value) => console.log(value);

<Molecules.InlineForm
	onSubmit={submitForm}
	inputAttributes={{
		type: 'text',
		name: 'example',
	}}
	label="Example"
/>
```

### Promise Submit

While the promise is being resolved, automatically sets the loading state, once the Promise
resolves, then the form returns a success state, the message can be manually changed using the
successMessage props (see custom proptypes). If the promise rejects, then the form displays
an error state.

```javascript
import React, { Component } from 'react';
import { Molecules } from '@dnovicki/dv-components';

/**
 * @param  {String} value value of input
 */
const submit = value => new Promise((resolve) => {
	setTimeout(() => resolve(console.log(value)), 1000);
});

<Molecules.InlineForm
	onSubmit={submitForm}
	inputAttributes={{
		type: 'text',
		name: 'example',
	}}
	label="Example"
	isPromise
/>
```

## Custom PropTypes
| property         | propType                                                                 | required | default                 | description                                                                                            |
|:-----------------|:-------------------------------------------------------------------------|:---------|:------------------------|:-------------------------------------------------------------------------------------------------------|
| inputAttributes  | [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | true     |                         | props to be passed to [input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) |
| inputValue       | string                                                                   | false    | ""                      | default value to be passed to input field                                                              |
| buttonAttributes | buttonAttributes                                                         | false    | { type: 'primary' }     | see button atom for available props                                                                    |
| buttonText       | string                                                                   | false    | Submit                  | button text for submit                                                                                 |
| onSubmit         | function                                                                 | true     |                         | function to execute when valid form is submitting                                                      |
| successMessage   | string                                                                   | false    | Successfully Submitted! | message to display when in the success state                                                           |
| success          | boolean                                                                  | false    | false                   | true if form has been successfully submitted                                                           |
| loading          | boolean                                                                  | false    | false                   | true if form is being submitted                                                                        |
| isPromise        | boolean                                                                  | false    | false                   | true if onSubmit is async function                                                                     |
| label            | string                                                                   | true     |                         | label for input field                                                                                  |
