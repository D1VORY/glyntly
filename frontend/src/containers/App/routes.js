import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import GoodsTable from '../GoodsTable';

export default function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <GoodsTable />
                </Route>
            </Switch>
        </Router>
    )
}