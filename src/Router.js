import React from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import Footer from './components/Footer';


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
