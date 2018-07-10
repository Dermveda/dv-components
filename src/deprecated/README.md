# dv-components
## Dermveda Component Library used for common components built on React, Bootstrap, and PostCSS.

To use this library you will need to be sure your project imports the global styles `@import 'dv-components/dist/styles.css'` somewhere in your project.

### Button
This button gives up many different options for an animated and material-like design.
| Property    | Required | Type     | Default   | Description                  |
|:------------|:---------|:---------|:----------|:-----------------------------|
| to          |          | url      | null      | Link url if isLink           |
| text        |          | String   | null      | Button text                  |
| icon        |          | String   | null      | Material icon class          |
| type        |          | String   | secondary | Primary or secondary         |
| className   |          | String   | null      | Additional class if needed   |
| target      |          | String   | null      | `<a target={target}>`        |
| onClick     |          | Function | null      | Function ran when clicked    |
| isLoading   |          | Boolean  | false     | Shows loader in button       |
| isLink      |          | Boolean  | false     | Determines link or not       |
| isSubmit    |          | Boolean  | false     | Submit button for form?      |
| isDisabled  |          | Boolean  | false     | HTML disabled                |
| isRed       |          | Boolean  | false     | Red text                     |
| isUppercase |          | Boolean  | false     | All uppercase                |
| isLarge     |          | Boolean  | false     | Large button                 |
| isFullWidth |          | Boolean  | false     | Is width of container        |
| color       |          | String   | DV Green  | Optional className for color |
| children    |          | HTML     | null      | Custom guts                  |

### FormInput
Material design form input.
| Property | Required | Type | Default | Description        |
|:---------|:---------|:-----|:--------|:-------------------|
| to       |          | url  | null    | Link url if isLink |


### Message
General message box used for errors.
| Property | Required | Type | Default | Description        |
|:---------|:---------|:-----|:--------|:-------------------|
| to       |          | url  | null    | Link url if isLink |

### MultipleChoice
This button gives up many different options for an animated and material-like design.
| Property | Required | Type | Default | Description        |
|:---------|:---------|:-----|:--------|:-------------------|
| to       |          | url  | null    | Link url if isLink |

### Slider
Slider used to typically handle numerical levels.
| Property | Required | Type | Default | Description        |
|:---------|:---------|:-----|:--------|:-------------------|
| to       |          | url  | null    | Link url if isLink |

### SliderInput
Extension of Slider for more input.
| Property | Required | Type | Default | Description        |
|:---------|:---------|:-----|:--------|:-------------------|
| to       |          | url  | null    | Link url if isLink |

### StarRating
StarRating is used for getting star rating feedback.
| Property | Required | Type | Default | Description        |
|:---------|:---------|:-----|:--------|:-------------------|
| to       |          | url  | null    | Link url if isLink |

### TextInput
TextInput is for questions that require longer feedback than FormInput can handle.
| Property | Required | Type | Default | Description        |
|:---------|:---------|:-----|:--------|:-------------------|
| to       |          | url  | null    | Link url if isLink |
