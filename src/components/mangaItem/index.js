import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner';
import { Navbar, Thumbnail, FormGroup, Button, Col, FormControl, Jumbotron, Row, Grid } from 'react-bootstrap';
// if(process.env.WEBPACK) require('./index.scss');

class MangaItem extends Component {

    render() {
        return(<Col sm={6} md={3}>
            <p>Missing description</p>
            <p>
                <Button bsStyle="primary">Check Manga!</Button>&nbsp;
            </p>
        </Col>
        );
    }
}


export default MangaItem;
