import React, { Component, Fragment } from "react";
import Navbar from "./Navbar/index";
import Home from "./Home/index";
import About from "./About/index";
import Menu from "./Menu/index";
import Contact from "./Contact/index";
import Footer from "./Footer/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Home />
        <About />
        <Menu />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
