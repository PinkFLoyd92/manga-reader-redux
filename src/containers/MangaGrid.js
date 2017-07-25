import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MangaGrid from '../components/mangaGrid';
import * as mangaActions from '../actions/mangaActions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mangaActions, dispatch);
}

const mapStateToProps = (state) => Object.assign({}, state, {
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaGrid);
