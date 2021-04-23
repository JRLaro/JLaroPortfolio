import './App.scss';
import NavBar from './components/TestingNav';
import TestingHomePage from './pages/TestingHomePage';
import AboutPage from './pages/AboutPage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";


function TestingApp() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <Router>
    <div className="App2">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              {/* <Redirect from='/JLaroPortfolio' to='/'/> */}
              <Route exact path="/">
                <TestingHomePage />
              </Route>
              <Route path="/about" >
                <AboutPage />
              </Route>
              <Route path="/portfolios" >
                <PortfoliosPage />
              </Route>
              <Route path="/contact" >
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
</Router>
  );
}

export default TestingApp;