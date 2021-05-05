import React from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  password?: boolean;
}

const CustomInput = ({ password }: Props) => {
  return (
    <TextField
      label={password ? "Password" : "Username"}
      style={{ marginBottom: "1rem" }}
      placeholder={"Enter the " + (password ? "password" : "username")}
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
