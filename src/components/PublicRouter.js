import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirect: pathname,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...rest} {...props} />
        )
      }
    />
  );
};

PublicRoute.defaultProps = { redirect: "/login" };

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string
};

export default PublicRoute;
