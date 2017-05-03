import {authSessionStates} from "../../constants";
import PropTypes from "prop-types";
import React, {Component} from "react";
import {Breadcrumb, Button, Col, Row} from "react-bootstrap";

export default class AuthSession extends Component {

  paramToken = () => {
    return this.props.params.token;
  };

  acceptAuthSession = () => {
    this.props.actions.acceptAuthSession(this.paramToken());
  };

  rejectAuthSession = () => {
    this.props.actions.rejectAuthSession(this.paramToken());
  };

  breadcrumbs = () => {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#demo">
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
          disabled={!this.props.loadedGetAuthSession}
          onClick={this.acceptAuthSession}>Accept</Button>
        <Button
          block
          bsSize='large'
          bsStyle='danger'
          disabled={!this.props.loadedGetAuthSession}
          onClick={this.rejectAuthSession}>Cancel</Button>
      </div>
    );
  };

  renderAcceptedState = () => {
    return (
      <div className="text-center"><h1>Success</h1></div>
    );
  };

  renderRejectedState = () => {
    return (
      <div className="text-center"><h1>Rejected</h1></div>
    );
  };

  componentWillMount() {
    this.props.actions.getAuthSession(this.paramToken());
  }

  render() {
    console.log(this.props.authSession);
    const isRejected = this.props.authSession.state === authSessionStates.rejected;
    const isAccepted = this.props.authSession.state === authSessionStates.accepted;

    let toRender = this.renderButtons();
    if(this.props.loadedGetAuthSession) {
      if (isRejected) {
        toRender = this.renderRejectedState();
      }
      if (isAccepted) {
        toRender = this.renderAcceptedState();
      }
    }

    return (
      <div className="container">
        <div className="auth-session">

          {this.breadcrumbs()}

          <Row>
            <Col md={3}/>
            <Col md={6}>

              <div className="well" style={{maxWidth: 400, margin: '0 auto 10px'}}>
                {toRender}
              </div>

            </Col>
            <Col md={3}/>
          </Row>

        </div>
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
    loadedGetAuthSession: PropTypes.bool.isRequired
  }

}