import React, {Component} from "react";

export default class AuthSession extends Component {
  render() {
    return (
      <div className='auth-session'>
        <div className="container">
          <p>AuthSession</p>
          <p>Token: {this.props.params.token}</p>
        </div>
      </div>
    );
  }
}