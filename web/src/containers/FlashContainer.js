import * as FlashActions from '../actions/flash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flash from '../components/Shared/Flash';

function mapStateToProps(state) {
  return {
    ...state.flash
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FlashActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flash);
