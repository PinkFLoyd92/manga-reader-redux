import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/home';
import * as axios from '../actions/axiosActions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(axios, dispatch);
}

const mapStateToProps = (state) => Object.assign({}, state, {
    mangas: state.mangas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
