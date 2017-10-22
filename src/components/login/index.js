import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner';
import { Form, Checkbox, Navbar, Thumbnail, FormGroup, Button, Col, FormControl, Jumbotron, Row, Grid } from 'react-bootstrap';
import { browserHistory } from 'react-router';
// if(process.env.WEBPACK) require('./index.scss');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        switch(e.target.id){
        case 'formUser': {
            this.setState({
                user: e.target.value
            });
            break;
        }case 'formPassword':{
            this.setState({
                password: e.target.password
            });
            break;
        }
        }
    }

    handleSubmit(e) {
        this.props.authenticate('root', '123');
        // if(this.state.user.length > 0 && this.state.password.length > 0) {
        //     browserHistory.push('/dash');
        // }else
        //     console.error('Unexpected behaviour');
    }
    componentWillMount() {
    }

    render() {
        return(
  <Form horizontal>
    <FormGroup controlId="formUser">
      <Col sm={2}>
        User
      </Col>
      <Col sm={10}>
                <FormControl type="text" placeholder="User" value={this.state.user} onChange={this.handleChange}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formPassword">
      <Col sm={2}>
        Password
      </Col>
      <Col sm={10}>
                <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
                <Button type="button" onClick={this.handleSubmit}>
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
        );
    }
}


export default Login;
