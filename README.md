# Formik Effect

Declarative Formik component for side-effects

```
npm install formik-effect --save
```

**Note: this has peer dependencies of `prop-types`, `react`, and `formik` (obvs)**


# Basic Usage

Import the `<Effect >` component and put it inside any Formik form. It renders `null`! Pass it an `onChange()` function and it will be called whenever your Formik form updates. 

```js
import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Effect } from 'formik-effect'

export const Signup = () =>
  <div>
    <h1>My Cool Form with a SideEffect</h1>
    <Formik
      onSubmit={values => console.log(values)}
      initialValues={{ firstName: '', lastName: '', email: '' }}
      render={props =>
        <Form className="whatever">
          <Effect onChange={(currentFormikState, nextFormikState) => {
               // do whatevs
               // FYI if you alter state it will cause another render
            }} 
          />
          <Field name="firstName" placeholder="First Name" />
          <Field name="lastName" placeholder="Last Name" />
          <Field name="email" type="email" placeholder="Email Address" />
          <button type="submit">Submit</button>
         
        </Form>}
    />
  </div>;
```

### Prop

Only one props! 


#### `onChange: (currentState: FormikState<Values>, nextState: FormikState<Values> => void;`

Put your side effect here....

`FormikState` includes:

- `values`
- `errors`
- `touched`
- `isSubmitting`


## Author

- Jared Palmer [@jaredpalmer](https://twitter.com/jaredpalmer)
