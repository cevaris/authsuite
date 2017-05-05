import { Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import PropTypes from "prop-types";
import React, { Component } from 'react';

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
            <FormControl name='identity_type' type='hidden' value='phone'/>
          </FormGroup>

          <FormGroup>
            <Button bsStyle='primary' disabled type='submit'>
              Send Text
            </Button>
          </FormGroup>
        </Form>

      </div>
    );
  }

  static propTypes = {
    actions: PropTypes.shape({
      postDemoAuthSession: PropTypes.func.isRequired
    }).isRequired,
  }

}
