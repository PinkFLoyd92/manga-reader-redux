import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/home';
import * as axios from '../actions/axiosActions';
import * as mangas from '../actions/mangaActions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, axios, mangas), dispatch);
}

const mapStateToProps = (state) => Object.assign({}, state, {
    mangas: state.mangas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
