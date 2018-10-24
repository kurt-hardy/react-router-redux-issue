import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { push } from "connected-react-router";
import { connect } from "react-redux";

const Main = (props) => (
    <div className="App">
        <header className="App-header">
            <button onClick={() => props.pushTo("page-1")}>Page 1</button>
            <button onClick={() => props.pushTo("page-2")}>Page 2</button>
        </header>
        <section>
            <span>Rendering Page 1 or 2 below:</span>
            <Switch>
                <Route path="/page-1" Component={Page1} />
                <Route path="/page-2" Component={Page2} />
                <Redirect to="/page-1" />
            </Switch>
        </section>
    </div>
);

const Page1 = () => (<div>Page 1</div>);
const Page2 = () => (<div>Page 2</div>);

const mapDispatchToProp = dispatch => ({
    pushTo: url => dispatch(push(url)),
});

export default withRouter(connect(() => ({}), mapDispatchToProp)(Main));
