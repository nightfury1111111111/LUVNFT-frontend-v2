import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import "./styles/output.css";
import theme from "./theme";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "components/header.js";

import Home from "views/Home.js";
import About from "views/About.js";
// import Market from "views/Market.js";
import NftDetail from "views/NftDetail.js";
import World from "views/World";

import Store from "./stores/store";
import Marketplace from "views/Marketplace";
// const store = Store.store;
// const emitter = Store.emitter;
const dispatcher = Store.dispatcher;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Archivo Black"
  }
`;

function App() {
  useEffect(() => {
    // Some initialization logic here
    dispatcher.dispatch({ type: "CONFIGURE", content: {} });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/market">
              <Marketplace />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/nft/:id">
              <NftDetail />
            </Route>
            <Route path="/world">
              <World />
            </Route>
          </Switch>
        </div>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
