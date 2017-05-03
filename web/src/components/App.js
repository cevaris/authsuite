import PropTypes from 'prop-types';
import { Footer, Header } from './Shared';
import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    window.fetch('/test.json')
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
