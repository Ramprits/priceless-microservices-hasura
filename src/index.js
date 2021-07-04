import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { HashRouter, Router } from "react-router-dom";

import App from "./App";
import { client } from "./context/apolloContext";
import { history } from "./utils";
import AuthProvider from "./context/authContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router history={history}>
      <HashRouter>
        <ApolloProvider client={client}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ApolloProvider>
      </HashRouter>
    </Router>
  </StrictMode>,
  rootElement
);
