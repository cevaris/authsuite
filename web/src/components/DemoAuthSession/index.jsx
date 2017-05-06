import EmailDemo from "./EmailDemo";
import PropTypes from "prop-types";
import SmsDemo from "./SmsDemo";
import {Col, Row} from "react-bootstrap";
import React, {Component} from "react";
import WatchDemo from "./WatchDemo";

export default class DemoAuthSession extends Component {

  renderDemoForms = () => {
    return (
      <div className='demo-auth-session'>
        <Row>
          <Col sm={6}>
            <SmsDemo actions={this.props.actions}/>
          </Col>
          <Col sm={6}>
            <EmailDemo actions={this.props.actions}/>
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    if (!this.props.demoAuthSessionCreated) {
      return this.renderDemoForms()
    } else {
      return <WatchDemo {...this.props} />
    }
  }

  static propTypes = {
    actions: PropTypes.shape({
      postDemoAuthSession: PropTypes.func.isRequired,
      getDemoAuthSession: PropTypes.func.isRequired
    }).isRequired,
    demoAuthSessionCreated: PropTypes.bool.isRequired,
    demoAuthSession: PropTypes.shape({
      receipt: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      identity_type: PropTypes.string.isRequired,
      identity: PropTypes.string.isRequired,
    }).isRequired,
  }
}
