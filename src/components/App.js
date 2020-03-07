import React from "react";
import ReactDOM from "react-dom";
import { Header, Navigations } from "./common/Header";
import { Main } from "./Main";

// import { Flight } from "./Flight";

export const App = () => {
  return (
    <div data-testid="App">
      <Header />
      <Navigations />
      <Main />
    </div>
  );
};
