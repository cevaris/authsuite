import PropTypes from "prop-types";
import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import {authSessionStates} from "../../constants";

export default class WatchDemo extends Component {

  pollStatus = () => {
    setTimeout(() => {
      if (this.props.demoAuthSession.state === authSessionStates.sent) {
        this.props.actions.getDemoAuthSession(this.props.demoAuthSession.receipt);
        this.pollStatus();
      }
    }, 2000);
  };

  componentWillMount() {
    this.pollStatus();
  }

  renderStatus () {
    const identityType = this.props.demoAuthSession.identity_type;
    const identity = this.props.demoAuthSession.identity;

    let toRender = `Check your ${identityType} (${identity}) to approve your auth session.`;
    if (this.props.demoAuthSession.state === authSessionStates.accepted) {
      toRender = (<h1>Auth Session has been Accepted!</h1>)
    }
    if (this.props.demoAuthSession.state === authSessionStates.rejected) {
      toRender = (<h1>Auth Session has been Rejected!</h1>)
    }

    return (<div className='text-center'>{toRender}</div>);
  }

  render() {
    return (
      <div className='demo-auth-session__form'>

        <Row>
          <Col md={3}/>
          <Col md={6}>

            <div className='well demo-auth-session-well'>
              <div className='text-center'>{this.renderStatus()}</div>
            </div>

          </Col>
          <Col md={3}/>
        </Row>


      </div>
    );
  }

  static propTypes = {
    actions: PropTypes.shape({
      postDemoAuthSession: PropTypes.func.isRequired,
      getDemoAuthSession: PropTypes.func.isRequired
    }).isRequired,
    demoAuthSession: PropTypes.shape({
      receipt: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      identity_type: PropTypes.string.isRequired,
      identity: PropTypes.string.isRequired,
    }).isRequired,
  }
}
