import PropTypes from "prop-types";
import React, {Component} from "react";

export default class WatchDemo extends Component {

  pollStatus = () => {
    setTimeout(() => {
      if (this.props.demoAuthSession.state === 'sent') {
        this.props.actions.getDemoAuthSession(this.props.demoAuthSession.receipt);
        this.pollStatus();
      }
    }, 1000);
  };

  componentWillMount() {
    this.pollStatus();
  }

  render() {
    return (
      <div className='demo-auth-session__form'>
        State: {this.props.demoAuthSession.state}
      </div>
    );
  }

  static propTypes = {
    actions: PropTypes.shape({
      postDemoAuthSession: PropTypes.func.isRequired,
      getDemoAuthSession: PropTypes.func.isRequired
    }).isRequired,
    demoAuthSession: PropTypes.shape({
      receipt: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
  }
}
