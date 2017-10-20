import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner';
import { Navbar, Thumbnail, FormGroup, Button, Col, FormControl, Jumbotron, Row, Grid } from 'react-bootstrap';
if(process.env.WEBPACK) require('./index.scss');

class MangaManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            fetching: true,
            error: false,
        };
        this.handleChange = this.handleChange.bind(this);
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
                console.error('error: ', error);
            }
            );
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        });
    }
    getSrc(mangaItem){
        return `data:image/gif;base64,${mangaItem[1].logo}`;
    }
    render() {
        let mapMangas = this.props.mangas;
        const items = mapMangas.map((mangaItem) => {
            if(mangaItem[0].indexOf(this.state.value) !== -1){
                const src = this.getSrc(mangaItem);
                return(<Col sm={6} md={3} key={mangaItem[0]}>
                    <Thumbnail src={src}>
                        <h5>{mangaItem[0]}</h5>
                        <p>Missing description</p>
                        <p>
                            <Button bsStyle="primary">Check Manga!</Button>&nbsp;
                        </p>
                    </Thumbnail>
                </Col>
                );
            }  
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
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            {' '}
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


export default MangaManager;
