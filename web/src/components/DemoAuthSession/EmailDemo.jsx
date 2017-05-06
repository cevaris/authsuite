import { Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';


export default class EmailDemo extends Component {

  _handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      identity: findDOMNode(this.refs.identity).value,
      identity_type: findDOMNode(this.refs.identity_type).value,
    };

    this.props.actions.postDemoAuthSession(payload);
  };

  getValidationState = () => {
    // const length = this.state.value.length;
    // if (length > 10) return 'success';
    // else if (length > 5) return 'warning';
    // else if (length > 0) return 'error';
    return 'success';
  };

  render() {
    return (
      <div className='demo-auth-session__form'>

        <Form onSubmit={this._handleSubmit}>

          <FormGroup validationState={this.getValidationState()}>
            <ControlLabel>
              Email
            </ControlLabel>
            <FormControl placeholder='email@example.com' name='identity' ref='identity' type='email'/>
            <HelpBlock>Demo using your Email</HelpBlock>
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <FormControl type='hidden' name='identity_type' ref='identity_type' value='email'/>
          </FormGroup>

          <FormGroup>
            <Button bsStyle='primary' type='submit'>
              Send Email
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
