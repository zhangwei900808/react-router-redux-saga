import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { matchRoutes, renderRoutes } from "react-router-config";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/es/integration/react";
import createHistory from "history/createBrowserHistory";

import configureStore, { history } from "./redux/store";
import routes from "./router";

import TodoPage from "./pages/TodoPage";
const { persistor, store } = configureStore();

const history = createHistory();

// import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoPage />
      </div>
    );
  }
}

export default App;
