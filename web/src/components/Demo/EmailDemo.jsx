import { Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import React, { Component } from 'react';

export default class EmailDemo extends Component {
  render() {
    return (
      <div className='demo-auth-session__form'>

        <Form>

          <FormGroup validationState='error'>
            <ControlLabel>
              Email
            </ControlLabel>
            <FormControl name='auth_session_demo[identity]' placeholder='email@example.com' type='email'/>
            <HelpBlock>Demo using your Email</HelpBlock>
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <Button bsStyle='primary' disabled type='submit'>
              Send Email
            </Button>
          </FormGroup>
        </Form>

      </div>
    );
  }
}
