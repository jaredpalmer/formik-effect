import * as React from 'react';
import { FormikProps, FormikState } from 'formik';
import * as PropTypes from 'prop-types';

export interface EffectProps<Values = {}> {
  onChange(
    currentState: FormikState<Values>,
    nextState: FormikState<Values>
  ): void;
}

export class Effect<Values = {}> extends React.Component<
  EffectProps<Values>,
  {}
> {
  static contextTypes = {
    formik: PropTypes.object,
  };

  componentWillReceiveProps(
    _nextProps: EffectProps<Values>,
    nextContext: { formik: FormikProps<Values> }
  ) {
    const { values, touched, errors, isSubmitting } = this.context.formik;
    const {
      values: nextValues,
      touched: nextTouched,
      errors: nextErrors,
      isSubmitting: nextIsSubmitting,
    } = nextContext.formik;
    if (nextContext.formik !== this.context.formik) {
      this.props.onChange(
        {
          values: nextValues,
          touched: nextTouched,
          errors: nextErrors,
          isSubmitting: nextIsSubmitting,
        },
        {
          values,
          touched,
          errors,
          isSubmitting,
        }
      );
    }
  }

  render() {
    return null;
  }
}
