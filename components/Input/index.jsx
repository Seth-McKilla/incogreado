import { useController } from "react-hook-form";
import _ from "lodash";

// Mui
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Input({ name, control, multiline, required }) {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required,
      maxLength: 500,
    },
  });

  return (
    <>
      <TextField
        {...inputProps}
        inputRef={ref}
        label={`${_.startCase(name)}${required ? " *" : ""}`}
        multiline={multiline}
        minRows={6}
        variant="outlined"
        fullWidth
        error={!!error}
      />
      {error && (
        <Typography variant="caption" color="error">
          {error.type === "maxLength"
            ? "Maximum length of 250 characters"
            : `${_.startCase(name)} is required`}
        </Typography>
      )}
    </>
  );
}

Input.defaultProps = {
  multiline: false,
  required: true,
};

export default Input;
