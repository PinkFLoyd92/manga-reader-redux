import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, HelpBlock, Row, Grid, Col, PageHeader, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const axios = require('axios');

class Manga extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { key: 0, value: '' };
  }


  componentWillMount() {
    axios.get('http://localhost:8080/')
  .then(response => this.props.fillMangas(response.data))
  .catch(err => {
    console.info(err);
    return this.props.addManga('fail', 'error');
  });
  }

  handleClick() {
    this.props.fillMangas();
      // this.setState({key : this.state.key+1});
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 3) return 'success';
    return 'warning';
  }
  render() {
    const { mangas } = this.props;
    let mangaLi = null;
    let filteredMangas = [];
    if (mangas !== undefined) {
      filteredMangas = mangas.filter((manga) => manga.name.includes(this.state.value), this);
      mangaLi = filteredMangas.map((manga) =>
        <li key={manga.description}>{manga.name}</li>);
    } else {
      mangaLi = <p>No hay mangas..</p>;
    }
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8} mdOffset={4}>
            <PageHeader>
   Filter the manga you want to read
</PageHeader>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <form>
              <FormGroup
                controlId="inputName"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Select the manga</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter the name"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validating entry</HelpBlock>
              </FormGroup>
            </form>
          </Col>
        </Row>
        <div role="textbox" onClick={this.handleClick}>
          {mangaLi}
        </div>

        <Link to="/Info"> Go to link Page</Link>
      </Grid>
    );
  }
}

Manga.propTypes = {
  mangas: PropTypes.array.isRequired,
  addManga: PropTypes.func.isRequired,
  fillMangas: PropTypes.func.isRequired
};
export default Manga;
