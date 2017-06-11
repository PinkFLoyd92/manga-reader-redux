import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MangaInfo from '../components/MangaInfo';
import * as MangaActions from '../actions/manga';

function mapStateToProps(state) {
  return {
    mangas: state.mangas,
    selectedManga: state.selectedManga
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MangaActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MangaInfo);
