import React, {Component} from "react";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Radio, Row} from "react-bootstrap";

export default class DemoAuthSession extends Component {
  render() {
    return (
      <div className='demo-auth-session'>
        <Row>
          <Col sm={1}/>
          <Col sm={10}>

            <Row>
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Phone or Email
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="555-123-4567 or myEmail@email.com"/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>
                    Identity Type
                  </Col>

                  <Col sm={10}>
                    <Radio name="auth_session[idenity_type]" inline>
                      Phone
                    </Radio>
                    {' '}
                    <Radio name="auth_session[idenity_type]" inline>
                      Email
                    </Radio>
                  </Col>
                </FormGroup>


                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      Sign in
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Row>

          </Col>
          <Col sm={1}/>
        </Row>
      </div>
    );
  }
}