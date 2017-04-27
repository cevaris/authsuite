import React, {Component} from "react";
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
        <Footer />
      </div>
    );
  }
}

export default App;
