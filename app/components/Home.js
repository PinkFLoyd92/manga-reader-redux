// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styles from './Home.css';

const ReactDOM = require('react-dom');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }; // name of the manga

      console.info(this.props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.info(ReactDOM.findDOMNode(this.refs.formControl).value);
    event.preventDefault();
      console.info(browserHistory);
  }
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Select a manga</h2>
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup controlId="formInlineName">
              <ControlLabel>Manga Name</ControlLabel>
              {' '}
              <FormControl ref="formControl" type="text" placeholder="Filter here..." />
            </FormGroup>
            {' '}
            <Button type="submit">
      Send invitation
    </Button>
          </Form>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
