require('react-spinner/react-spinner.css');
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner';
import { Navbar, Thumbnail, FormGroup, Button, Col, FormControl, Jumbotron, Row, Grid } from 'react-bootstrap';
if(process.env.WEBPACK) require('./index.scss');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            error: false,
        };
    }
    componentWillMount() {
        this.setState({
            fetching: true
        });

        this.props.fetchMangas().then((result) => {
            this.props.loadMangas(result.payload.data);
            this.setState({
                fetching: false
            });
        })
            .catch((error) => {
                this.setState({
                    error: true,
                });

                console.info('error: ', error);
            }
            );
    }

    render() {
        let mapMangas = this.props.mangas;
        const items = mapMangas.map((mangaItem) => {
            return(<Col sm={6} md={3}>
                <Thumbnail src="{mangaItem[1]}/temporal" alt="242x200">
                    <h3>{mangaItem[0]}</h3>
                    <p>Missing description</p>
                    <p>
                        <Button bsStyle="primary">Check Manga!</Button>&nbsp;
                    </p>
                </Thumbnail>
            </Col>
            );
            
        });
        const grid = 
            <Row className="show-grid">
                {items}
            </Row>;

        if(this.state.fetching === true){
            return (<Spinner />);
        }else if(this.state.error === true){
            return(
                <Jumbotron>
                    <h1>Error!</h1>
                    <p>This should not appear.</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
            );
        }

        return(
            <Grid>
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
                </Navbar>
                <Row>
                    { grid }
                </Row>
            </Grid>
        );
    }
}


export default Home;
