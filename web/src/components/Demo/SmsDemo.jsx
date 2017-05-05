import {Button, Col, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Row} from "react-bootstrap";
import React, {Component} from "react";

export default class SmsDemo extends Component {
  render() {
    return (
      <div className='demo-auth-session__form'>

        <Form>
          <FormGroup>
            <ControlLabel>
              SMS/Text
            </ControlLabel>
            <FormControl name='identity' placeholder='555-123-4567' type='tel'/>
            <HelpBlock>Demo using your SMS/Text Message</HelpBlock>
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <Button bsStyle='primary' type='submit' disabled>
              Send Text
            </Button>
          </FormGroup>
        </Form>

      </div>
    );
  }
}
