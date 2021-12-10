import React, { lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "components/RouteWithLayout/RouteWithLayout";
import MainLayout from "layouts/Main/Main";
import Products from "views/ProductList/ProductList";

const NotFound = lazy(() =>
  import(/*webpackChunkName: "NotFound"*/ "views/NotFound/NotFound")
);
const Account = lazy(() =>
  import(/*webpackChunkName: "Account"*/ "views/Account/Account")
);
const SignIn = lazy(() =>
  import(/*webpackChunkName: "SignIn"*/ "views/SignIn/SignIn")
);
const Checkout = lazy(() =>
  import(/*webpackChunkName: "Checkout"*/ "views/Checkout/Checkout")
);
const ProductDetail = lazy(() =>
  import(
    /*webpackChunkName: "ProductDetail"*/ "views/ProductDetail/ProductDetail"
  )
);
const SignUp = lazy(() =>
  import(/*webpackChunkName: "SignUp"*/ "views/SignUp/SignUp")
);

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/Products" />
      <RouteWithLayout
        component={NotFound}
        exact
        layout={MainLayout}
        path="/not-found"
        privateRoute={false}
      />
      <RouteWithLayout
        component={Account}
        exact
        layout={MainLayout}
        path="/account"
        privateRoute={true}
      />
      <RouteWithLayout
        component={SignIn}
        exact
        layout={MainLayout}
        path="/sign-in"
        privateRoute={false}
      />
      <RouteWithLayout
        component={SignUp}
        exact
        layout={MainLayout}
        path="/sign-up"
        privateRoute={false}
      />
      <RouteWithLayout
        component={Products}
        exact
        layout={MainLayout}
        path="/Products"
        privateRoute={false}
      />
      <RouteWithLayout
        component={Checkout}
        exact
        layout={MainLayout}
        path="/Checkout"
        privateRoute={false}
      />
      <RouteWithLayout
        component={ProductDetail}
        exact
        layout={MainLayout}
        path="/ProductDetail"
        privateRoute={false}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
