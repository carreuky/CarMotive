import "./App.css";
import NavBar from "./Components/NavBar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/HomeChild/Home";
import About from "./Components/AboutChild/About";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import ContactUs from "./Components/ContactUs";
//import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
      {/* <header className="App-header">
        <p>
          jkbhjb
        </p>
      
          Learn React
      </header> */}
    </div>
  );
}

export default App;
