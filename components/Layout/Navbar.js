import React from "react";
import { AppBar,Tabs,Tab } from '@material-ui/core';
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
import { useRouter } from "next/router";
import Link from "next/link";
import { color } from "@material-ui/system";
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiAppBar: {
      // Name of the rule
      colorSecondary: {
        // Some CSS
        backgroundColor: '#081F1C',
      },
    },
  },
});
function Navbar() {
  const router = useRouter();


  const isActive = route => router.pathname === route;

  return (
    <ThemeProvider theme={theme}>
    <AppBar color="secondary" position="static">
    <Tabs  centered={true} aria-label="simple tabs example">
      <Link href="/login">
      <Tab label="SIGN IN" disabled={isActive("/login")} />
      </Link>
      <Link href="/signup">
      <Tab label="REGISTER" disabled ={isActive("/signup")}/>
      </Link>
    </Tabs>
  </AppBar>
  </ThemeProvider>
  );
}

export default Navbar;
