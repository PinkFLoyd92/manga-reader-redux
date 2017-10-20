import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner';
import { Navbar, Thumbnail, FormGroup, Button, Col, FormControl, Jumbotron, Row, Grid } from 'react-bootstrap';
// if(process.env.WEBPACK) require('./index.scss');

class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.info('Mounting new Component')
    }

    render() {

        return(
          <div>
            Testing Login
            
          </div>
        );
    }
}


export default Login;
