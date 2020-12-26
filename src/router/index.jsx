import React from 'react';
import { Switch,Route, Redirect } from "react-router-dom";
import Index from "../pages/index/index";
import Book from "../pages/book/index";
import About from "../pages/about/index";
import User from "../pages/user/index";
import Details from "../pages/details/index";

export default class RouterIndex extends React.Component{
    render(){
        return(
            <Switch>
                <Route path = "/" exact render = {() =>(
                    <Redirect to="/index" />
                )} />
                <Route path = "/index" component = {Index}/>
                <Route path = "/book" component = {Book}/>
                <Route path = "/about" component = {About}/>
                <Route path = "/user" component = {User}/>
                <Route path = "/details" component = {Details}/>
            </Switch>
        )
    }
}

