import { ReactElement, useEffect, useRef } from 'react';

import { connect, FormikContext, FormikState } from 'formik';

export interface EffectProps<Values = {}> {
  onChange(
    currentState: FormikState<Values>,
    nextState: FormikState<Values>
  ): void;
}

interface Props<Values> extends EffectProps<Values> {
  formik: FormikContext<Values>;
}

export const Effect = <Values>({ formik, onChange }: Props<Values>) => {
  const ref = useRef<FormikContext<Values> | null>(null);
  useEffect(() => {
    if (!ref.current) {
      ref.current = formik;
    }

    onChange(ref.current, formik);
    ref.current = formik;
  }, [formik, onChange]);

  return null;
};

export default connect(Effect) as <Values>(
  props: EffectProps<Values>
) => ReactElement;
