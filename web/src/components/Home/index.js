import {Card} from "../Shared/index";
import {Col, Row} from "react-bootstrap";
import React, {Component} from "react";
import DemoAuthSessionContainer from "../../containers/DemoAuthSessionContainer";

export default class Home extends Component {
  render() {
    return (
      <div className='home'>

        <div className='home__about'>
          <Row>
            <h2>Simple API/Service for quickly authorizing any action.</h2>
            <Col sm={12}>
              <ul>
                <li><h4>Confirm an user's email, or phone.</h4></li>
                <li><h4>Multi-Factor authentication.</h4></li>
                <li><h4>Confirm vital (non-recoverable) actions.</h4></li>
                <li><h4>Confirm user action is not really a executed by bot.</h4></li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className='home__cards'>
          <h2>Features</h2>
          <Row className='card-deck'>
            <Col sm={4}>
              <Card
                body='Create api token, make a simple HTTP request.'
                buttonLink='/get-started'
                buttonText='Get Started!'
                title='Setup is Quick'
              />
            </Col>

            <Col sm={4}>
              <Card
                body='You can authenticate via Email or SMS.'
                buttonLink='/demo'
                buttonText='Test run'
                title='Email/SMS'
              />
            </Col>

            <Col sm={4}>
              <Card
                body='Authenticate via your web browser or your phone.'
                buttonLink='/show-video'
                buttonText='Show me how'
                title='Cross Platform'
              />
            </Col>
          </Row>
        </div>

        <div className='home__demo'>
          <h2>Try Demo</h2>
          <DemoAuthSessionContainer />
        </div>

      </div>
    );
  }
}
