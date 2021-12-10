import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, privateRoute, ...rest } = props;
  const { isLogin } = useSelector((state) => state.sesion);

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          {privateRoute ? (
            isLogin ? (
              <Component {...matchProps} />
            ) : (
              <Redirect to="/sign-in" />
            )
          ) : (
            <Component {...matchProps} />
          )}
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
