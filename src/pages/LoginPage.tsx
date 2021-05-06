import React, { MouseEventHandler, useState } from "react";
import CustomInput from "../components/CustomInput";
import { Button, Container, Paper } from "@material-ui/core";

interface Props {
  loginFunction: (setError: Function) => MouseEventHandler;
  setUser: Function;
  setPass: Function;
}

const LoginPage = ({ loginFunction, setUser, setPass }: Props) => {
  const [error, setError] = useState(false);

  return (
    <div>
      <Paper
        style={{ maxWidth: "500px", padding: "2rem 1rem", margin: "6rem auto" }}
        variant="outlined"
      >
        <Container maxWidth="xs">
          {error && "Could not authenticate user!"}
          <form>
            <CustomInput
              onChange={(e) => {
                setError(false);
                setUser(e.target.value);
              }}
              error={error}
            />
            <CustomInput
              onChange={(e) => {
                setError(false);
                setPass(e.target.value);
              }}
              error={error}
              password
            />
            <Button
              onClick={loginFunction(setError)}
              fullWidth
              disableElevation
              variant="contained"
              size="large"
              color="primary"
            >
              Login
            </Button>
          </form>
        </Container>
      </Paper>
    </div>
  );
};

export default LoginPage;
