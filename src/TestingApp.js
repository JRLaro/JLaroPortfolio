import './App.scss';
import NavBar from './components/TestingNav';
import HomePage from './pages/TestingHomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PortfoliosPage from './pages/PortfoliosPage';
// import BlogsPage from './Pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';

function TestingApp() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
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
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfoliosPage />
              </Route>
              <Route path="/blogs" exact>
                {/* <BlogsPage /> */}
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default TestingApp;