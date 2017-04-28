import { Footer, Header } from './Shared';
import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  componentDidMount() {
    window.fetch('/api/v1/welcome.json')
      .then((response) => response.json())
      .then((json) => console.log(json, json))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.object
  }
}
