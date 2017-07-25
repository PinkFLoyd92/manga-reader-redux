import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router';
//if(process.env.WEBPACK) require('./index.scss');
const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});


class Home extends Component {
	render() {
		return (
<div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            {this.props.MainTitle}
          </Typography>
        </Toolbar>
      </AppBar>
<Link to='/mangas'>
					<button>Go to mangas</button>
</Link>
    </div>
		);
	}
}


Home.propTypes = {
  MainTitle: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Home);
