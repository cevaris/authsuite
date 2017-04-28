import * as HomeActions from '../actions/home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    ...state.app,
    ...state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
