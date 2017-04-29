import { Button, Col, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Row } from 'react-bootstrap';
import React, { Component } from 'react';

export default class EmailDemo extends Component {
  render() {
    return (
      <div className='demo-auth-session__form'>
        <Row>
          <Col sm={12} xs={12}>

            <Form horizontal>

              <FormGroup>
                <Col componentClass={ControlLabel} sm={3}>
                  Email
                </Col>
                <Col sm={9}>
                  <FormControl name='auth_session_demo[identity]' placeholder='email@example.com' type='email' />
                  <HelpBlock>Demo using your Email</HelpBlock>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={9} smOffset={3}>
                  <Button bsStyle='primary' type='submit'>
                    Send Email
                  </Button>
                </Col>
              </FormGroup>
            </Form>

          </Col>
        </Row>
      </div>
    );
  }
}
