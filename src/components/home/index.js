import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Navbar, FormGroup, Button, FormControl } from 'react-bootstrap';
//if(process.env.WEBPACK) require('./index.scss');


class Home extends Component {

    componentDidMount() {
        this.props.fetchMangas().then((result) => {
            console.info('result: ', result);
        })
            .catch((error) => {
                console.info('error: ', error);
            }
            );
    }

    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Brand</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                        {' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>);
    }
}



export default Home;
