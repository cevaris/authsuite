import * as AuthSessionActions from '../actions/authSession';
import AuthSession from '../components/AuthSession';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    ...state.authSession
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthSessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSession);
