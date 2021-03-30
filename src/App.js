import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Portfolio.css"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Router from "./Router";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Router /> */}
      <Navbar />
            
            
                    <HomePage />
             
            <Footer />
    </>
  );
}

export default App;
