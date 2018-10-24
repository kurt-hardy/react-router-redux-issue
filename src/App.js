import React from "react";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import "./App.css";
import Main from "./Main";

import configureStore from "./configureStore";

const history = createBrowserHistory();

const App = () => (
    <Provider store={configureStore(history)}>
        <ConnectedRouter history={history}>
            <Main />
        </ConnectedRouter>
    </Provider>
);

export default App;
