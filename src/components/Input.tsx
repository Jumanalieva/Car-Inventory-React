import { TextField } from '@mui/material';
import { forwardRef } from 'react';
import {  UseFormRegisterReturn } from 'react-hook-form';

interface InputType extends UseFormRegisterReturn {
  name: string;
  placeholder: string;
}

const Input = forwardRef((props: InputType, ref) => {
  const { name, placeholder, ...rest } = props;
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      type="text"
      name={name}
      placeholder={placeholder}
      {...rest}
    />
  );
});

export default Input;
