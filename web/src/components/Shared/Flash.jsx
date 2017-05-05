import {Alert} from "react-bootstrap";
import PropTypes from "prop-types";
import React, {Component} from "react";

export default class Flash extends Component {

  _handleResetFlash = () => {
    this.props.actions.resetFlash();
  };

  conditionallyRender = () => {
    if (this.props.showFlash) {
      return (
        <Alert bsStyle={this.props.level} onDismiss={this._handleResetFlash}>
          <h4>{this.props.title}</h4>
          {this.props.message}
        </Alert>
      );
    }
  };

  render() {
    return (
      <div className='flash'>
        {this.conditionallyRender()}
      </div>
    );
  }

  static propTypes = {
    actions: PropTypes.shape({
      resetFlash: PropTypes.func.isRequired
    }).isRequired,
    level: PropTypes.string.isRequired,
    message: PropTypes.array.isRequired,
    showFlash: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }
}

