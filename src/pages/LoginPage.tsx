import React, { MouseEventHandler } from "react";
import CustomInput from "../components/CustomInput";
import { Button, Container, Paper } from "@material-ui/core";

interface Props {
  loginFunction: MouseEventHandler;
}

const LoginPage = ({ loginFunction }: Props) => {
  return (
    <div>
      <Paper
        style={{ maxWidth: "500px", padding: "2rem 1rem", margin: "6rem auto" }}
        variant="outlined"
      >
        <Container maxWidth="xs">
          <form>
            <CustomInput />
            <CustomInput password />
            <Button
              onClick={loginFunction}
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
