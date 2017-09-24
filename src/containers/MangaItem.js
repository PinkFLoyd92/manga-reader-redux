import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MangaItem from '../components/mangaItem';
// import * as mangaActions from '../actions/mangaActions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

const mapStateToProps = (state) => Object.assign({}, state, {

});

export default connect(mapStateToProps, mapDispatchToProps)(MangaItem);
