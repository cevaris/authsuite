import { Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class SmsDemo extends Component {

  _handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      identity: findDOMNode(this.refs.identity).value,
      identity_type: findDOMNode(this.refs.identity_type).value,
    };

    this.props.actions.postDemoAuthSession(payload);
  };

  render() {
    return (
      <div className='demo-auth-session__form'>

        <Form onSubmit={this._handleSubmit}>
          <FormGroup>
            <ControlLabel>
              SMS/Text
            </ControlLabel>
            <FormControl name='identity' ref='identity' placeholder='555-123-4567' type='tel'/>
            <HelpBlock>Demo using your SMS/Text Message</HelpBlock>
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <FormControl name='identity_type' ref='identity_type' type='hidden' value='phone'/>
          </FormGroup>

          <FormGroup>
            <Button bsStyle='primary' type='submit'>
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
