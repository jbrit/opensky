import React from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  password?: boolean;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ password, onChange, error }: Props) => {
  return (
    <TextField
      error={error}
      onChange={onChange}
      label={password ? "Password" : "Username"}
      style={{ marginBottom: "1rem" }}
      placeholder={"Enter the " + (password ? "password" : "username")}
      type={password ? "password" : "text"}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  );
};

export default CustomInput;
