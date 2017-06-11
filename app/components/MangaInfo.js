import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MangaInfo extends Component {

  constructor(props) {
    super(props);
    console.info(this.props);
  }


  componentWillMount() {
    console.info(this.props.selectedManga);
  }


  render() {
    return (
      <div>
        {this.props.selectedManga}
      </div>
    );
  }
}

MangaInfo.propTypes = {
  selectedManga: PropTypes.string.isRequired,
};
export default MangaInfo;
