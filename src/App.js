import React, { Suspense } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import theme from "theme";
import "react-perfect-scrollbar/dist/css/styles.css";
import "assets/scss/index.scss";
import Routes from "Routes";
import store, { persistor } from "./store/index";
import {PersistGate} from 'redux-persist/integration/react';

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
              <Routes />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

export default App;
