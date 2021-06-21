import React from "react";
// import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
import { Container } from '@material-ui/core';
import nprogress from "nprogress";
import Router from "next/router";

function Layout({ children }) {
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();

  return (
    <>
      {/* <HeadTags /> */}
      <Navbar />

      <Container maxWidth='lg'>
        {children}
      </Container>
    </>
  );
}

export default Layout;
