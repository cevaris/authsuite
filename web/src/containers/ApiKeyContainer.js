import * as ApiKeyActions from '../actions/apiKey';
import ApiKey from '../components/ApiKey/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    ...state.apiKey,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ApiKeyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiKey);
