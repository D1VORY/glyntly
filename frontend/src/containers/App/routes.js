import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import GoodsTable from '../GoodsTable';
import ProductDetails from '../../components/ProductDetails';


export default function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <GoodsTable />
                </Route>

                <Route path="/product/:name" >
                    <ProductDetails />
                </Route>
            </Switch>
        </Router>
    )
}