import {Breadcrumb, Col, Row} from "react-bootstrap";
import React, {Component} from "react";
import NewApiKeyForm from "./ApiKeyForm";
import PropTypes from 'prop-types';

export default class ApiKey extends Component {

  breadcrumbs = () => {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href='/'>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href='/keys/new'>
          New Api Key
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  };

  componentWillMount() {
  }

  render() {
    let toRender = (<NewApiKeyForm actions={this.props.actions} />);
    if(this.props.completeNewApiKey) {
      toRender = (
        <div>

        </div>
      );
    }


    return (
      <div className='api-key'>

        {this.breadcrumbs()}

        <Row>
          <Col md={3}/>
          <Col md={6}>

            <NewApiKeyForm actions={this.props.actions} />

          </Col>
          <Col md={3}/>
        </Row>

      </div>
    );
  }

  static propTypes = {
    actions: PropTypes.shape({
      createApiKey: PropTypes.func.isRequired
    }).isRequired,
    apiKey: PropTypes.shape({
      key: PropTypes.string.isRequired
    }).isRequired,
    completeNewApiKey: PropTypes.bool.isRequired,
  }

}
