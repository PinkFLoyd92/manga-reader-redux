import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Manga from '../components/MangaSearch';
import * as MangaActions from '../actions/manga';

function mapStateToProps(state) {
  return {
    mangas: state.mangas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MangaActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Manga);
