import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { combineReducers } from "redux";

const rootReducer = combineReducers({});

const configureStore = (history) => {
    const middleware = [
        thunk,
        routerMiddleware(history),
    ];

    const composedEnhancers = compose(composeWithDevTools(applyMiddleware(...middleware)));

    return createStore(
        connectRouter(history)(rootReducer),
        {},
        composedEnhancers,
    );
};

export default configureStore;
