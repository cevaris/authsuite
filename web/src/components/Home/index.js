import {Card} from "../Shared";
import {Button, Col, Row} from "react-bootstrap";
import React, {Component} from "react";
import DemoAuthSessionContainer from "../../containers/DemoAuthSessionContainer";

export default class Home extends Component {
  render() {
    return (
      <div className='home'>

        <div className='home__cards'>
          <Row className='card-deck'>
            <Col sm={4}>
              <Card
                body='Create api token, make a simple HTTP request.'
                buttonLink='#get-started'
                buttonText='Get Started!'
                title='Setup is Quick'
              />
            </Col>

            <Col sm={4}>
              <Card
                body='You can authenticate via Email or SMS.'
                buttonLink='#demo'
                buttonText='Test run'
                title='Email/SMS'
              />
            </Col>

            <Col sm={4}>
              <Card
                body='Authenticate via your web browser or your phone.'
                buttonLink='#show-video'
                buttonText='Show me how'
                title='Cross Platform'
              />
            </Col>
          </Row>
        </div>

        <div className='home__about'>
          <Row>
            <Col sm={8}>
              <h2>What We Do</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi
                soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat
                explicabo, maiores!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur
                magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt
                voluptate. Voluptatum.
              </p>
              <p>
                <Button bsSize='large' bsStyle='primary'>Call to Action</Button>
              </p>
            </Col>
            <Col sm={4}>
              <h2>Contact Us</h2>
              <address>
                <strong>Start Bootstrap</strong>
                <br/>3481 Melrose Place
                <br/>Beverly Hills, CA 90210
                <br/>
              </address>
              <address>
                <abbr title='Phone'>P:</abbr> (123) 456-7890
                <br/>
                <abbr title='Email'>E:</abbr> <a href='mailto:#'>name@example.com</a>
              </address>
            </Col>
          </Row>

          <div className='home__demo'>
            <DemoAuthSessionContainer />
          </div>

        </div>
      </div>
    );
  }
}
