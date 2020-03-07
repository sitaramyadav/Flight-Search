import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import { Flight } from "./Flight";

export const Hotels = () => (
  <main>
    <h1>This is dummy page for Hotels</h1>
  </main>
);

export const PageNotFound = () => <h1>Opps! Page Not found 404</h1>;

export const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Flight} />
        <Route path="/hotels" component={Hotels} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};
