import React from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';



function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
           </BrowserRouter>
           
    )
}

export default Router
