import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRouter";
import PublicRoute from "./components/PublicRouter";
import { useAuth } from "./context/authContext";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import ProductPage from "./pages/products";
import "./styles.css";

export default function App() {
  const auth = useAuth();
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PublicRoute
          isAuthenticated={!!auth.user}
          path="/login"
          component={LoginPage}
        />
        <PrivateRoute
          isAuthenticated={!!auth.user}
          path="/products"
          component={ProductPage}
        />
      </Switch>
    </Fragment>
  );
}
