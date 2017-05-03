import * as AuthSessionActions from '../actions/authSession';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthSession from '../components/AuthSession';

function mapStateToProps(state) {
  return {
    ...state.app,
    ...state.authSession
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthSessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSession);
