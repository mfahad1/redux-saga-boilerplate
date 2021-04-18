import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

export function InputField(props) {
  const [field, meta] = useField(props);

  return (
    <TextField
      error={!!(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ''}
      {...field}
      {...props}
    />
  );
}
