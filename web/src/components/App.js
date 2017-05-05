import FlashContainer from '../containers/FlashContainer';
import PropTypes from 'prop-types';
import { Footer, Header } from './Shared';
import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    window.fetch('/test.json')
      .then((json) => console.log(json))
      .catch((error) => console.log(error.message));
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <FlashContainer />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.object
  }
}
