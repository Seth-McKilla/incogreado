import { useController } from "react-hook-form";
import _ from "lodash";
import Skeleton from "react-loading-skeleton";

// Mui
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Input({ name, control, maxLength, loading, multiline, required }) {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required,
      maxLength,
    },
  });

  return loading ? (
    <Skeleton height={multiline ? 167 : 52} />
  ) : (
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
  maxLength: 100,
  multiline: false,
  required: true,
};

export default Input;
