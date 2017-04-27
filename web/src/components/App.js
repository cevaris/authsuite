import React, {Component} from "react";
import logo from "../assets/images/logo.svg";
import Header from "./Shared/Header";
import Home from "./Home/Home";
import Footer from "./Shared/Footer";

class App extends Component {
  componentDidMount() {
    window.fetch('/api/v1/welcome.json')
      .then(response => response.json())
      .then(json => console.log(json, json))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
