import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Flash extends Component {

  _handleResetFlash = () => {
    this.props.actions.resetFlash();
    console.log('closing flash', this.props.showFlash);
  };

  conditionallyRender = () => {
    if (this.props.showFlash) {
      return (
        <div className='flash'>
          <Alert bsStyle={this.props.level} onDismiss={this._handleResetFlash}>
            <h4>{this.props.title}</h4>
            {this.props.message}
          </Alert>
        </div>
      );
    }
  };

  render() {
    return (
      <div className='container'>
        {this.conditionallyRender()}
      </div>
    );
  }

  static propTypes = {
    actions: PropTypes.shape({
      resetFlash: PropTypes.func.isRequired
    }).isRequired,
    level: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    showFlash: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }
}

