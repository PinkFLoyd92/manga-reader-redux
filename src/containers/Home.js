import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/home';
import * as HomeActions from '../actions/HomeActions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

const mapStateToProps = (state) => Object.assign({}, state, {
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
