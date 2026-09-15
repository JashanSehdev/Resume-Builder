import { FormFieldProps } from "./input-field.type";
import { TextField } from "@mui/material";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <TextField
      error = {!!error}
      helperText={error?.message}
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
  </>
);
export default FormField;
