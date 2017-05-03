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

  componentWillMount() {
    this.props.actions.getAuthSession(this.paramToken());
  }

  render() {
    return (
      <div className="container">
        <div className="auth-session">

          <Breadcrumb>
            <Breadcrumb.Item href="/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#demo">
              Auth Session
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {this.props.params.token.substring(0, 8)}
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col md={3}/>
            <Col md={6}>


              <div className="well" style={{maxWidth: 400, margin: '0 auto 10px'}}>
                <Button bsSize='large' bsStyle='primary' onClick={this.acceptAuthSession} block disabled={!this.props.loadedGetAuthSession}>Accept</Button>
                <Button bsSize='large' bsStyle='danger' onClick={this.rejectAuthSession} block disabled={!this.props.loadedGetAuthSession}>Cancel</Button>
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
    loadedGetAuthSession: PropTypes.bool.isRequired
  }

}