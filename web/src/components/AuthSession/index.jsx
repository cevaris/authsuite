import { authSessionStates } from '../../constants';
import PropTypes from 'prop-types';
import { Breadcrumb, Button, Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';

export default class AuthSession extends Component {

  paramToken = () => {
    return this.props.params.token;
  };

  _handleAcceptAuthSession = () => {
    this.props.actions.acceptAuthSession(this.paramToken());
  };

  _handleRejectAuthSession = () => {
    this.props.actions.rejectAuthSession(this.paramToken());
  };

  breadcrumbs = () => {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href='/'>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href='#demo'>
          Auth Session
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {this.paramToken().substring(0, 8)}
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  };

  renderButtons = () => {
    return (
      <div>
        <Button
          block
          bsSize='large'
          bsStyle='primary'
          disabled={this.props.disableAuthSessionForm}
          onClick={this._handleAcceptAuthSession}>Accept</Button>
        <Button
          block
          bsSize='large'
          bsStyle='danger'
          disabled={this.props.disableAuthSessionForm}
          onClick={this._handleRejectAuthSession}>Cancel</Button>
      </div>
    );
  };

  renderAcceptedState = () => {
    return (
      <div className='text-center'><h1>Auth Session has been Accepted!</h1></div>
    );
  };

  renderRejectedState = () => {
    return (
      <div className='text-center'><h1>Auth Session has been Rejected!</h1></div>
    );
  };

  componentWillMount() {
    this.props.actions.getAuthSession(this.paramToken());
  }

  render() {
    const isRejected = this.props.authSession.state === authSessionStates.rejected;
    const isAccepted = this.props.authSession.state === authSessionStates.accepted;

    let toRender = this.renderButtons();
    if (this.props.loadedGetAuthSession) {
      if (isRejected) {
        toRender = this.renderRejectedState();
      }
      if (isAccepted) {
        toRender = this.renderAcceptedState();
      }
    }

    return (
      <div className='auth-session'>

        {this.breadcrumbs()}

        <Row>
          <Col md={3}/>
          <Col md={6}>

            <div className='well' style={{ maxWidth: 400, margin: '0 auto 10px' }}>
              {toRender}
            </div>

          </Col>
          <Col md={3}/>
        </Row>

      </div>
    );
  }

  static propTypes = {
    actions: PropTypes.shape({
      acceptAuthSession: PropTypes.func.isRequired,
      rejectAuthSession: PropTypes.func.isRequired,
      getAuthSession: PropTypes.func.isRequired
    }).isRequired,
    authSession: PropTypes.shape({
      state: PropTypes.string.isRequired
    }).isRequired,
    disableAuthSessionForm: PropTypes.bool.isRequired,
    loadedGetAuthSession: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired
  }

}
