import * as DemoAuthSessionActions from '../actions/demoAuthSession';
import DemoAuthSession from '../components/DemoAuthSession';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    ...state.demoAuthSession
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DemoAuthSessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoAuthSession);
