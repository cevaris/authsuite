import {Footer, Header} from "./Shared";
import React, {Component} from "react";

class App extends Component {
  componentDidMount() {
    window.fetch('/api/v1/welcome.json')
      .then((response) => response.json())
      .then((json) => console.log(json, json))
      .catch((error) => console.log(error));
  }

  render() {
    console.log('app render');
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
