import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">OpenSky</Typography>
          {authenticated && (
            <Button
              onClick={() => setAuthenticated(false)}
              style={{ marginLeft: "auto" }}
              color="inherit"
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container fixed>
        {authenticated ? (
          <HomePage />
        ) : (
          <LoginPage
            loginFunction={(e) => {
              setAuthenticated(true);
            }}
          />
        )}
      </Container>
    </>
  );
}

export default App;
