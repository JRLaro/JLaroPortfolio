import './App.scss';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <Router>
    <div className="App ex5">
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
              <Route exact path="/">
                <HomePage />
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

export default App;