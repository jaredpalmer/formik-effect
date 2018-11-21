import * as React from 'react';
import { connect, FormikContext, FormikState } from 'formik';

export interface EffectProps<Values = {}> {
  onChange(
    currentState: FormikState<Values>,
    nextState: FormikState<Values>
  ): void;
}

class EffectInner<Values = {}> extends React.Component<
  EffectProps<Values> & { formik: FormikContext<Values> },
  {}
> {
  componentDidUpdate(
    prevProps: EffectProps<Values> & { formik: FormikContext<Values> }
  ) {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      isValidating,
      submitCount,
    } = prevProps.formik;
    const {
      values: nextValues,
      touched: nextTouched,
      errors: nextErrors,
      isSubmitting: nextIsSubmitting,
      isValidating: nextIsValidating,
      submitCount: nextSubmitCount,
    } = this.props.formik;

    if (this.props.formik !== prevProps.formik) {
      this.props.onChange(
        {
          values,
          touched,
          errors,
          isSubmitting,
          isValidating,
          submitCount,
        },
        {
          values: nextValues,
          touched: nextTouched,
          errors: nextErrors,
          isSubmitting: nextIsSubmitting,
          isValidating: nextIsValidating,
          submitCount: nextSubmitCount,
        }
      );
    }
  }

  render() {
    return null;
  }
}

export const Effect = connect<EffectProps<any>, any>(EffectInner);
