import React, {Component} from "react";
import {Footer, Header} from "./Shared";
import {Home} from "./Home";

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
