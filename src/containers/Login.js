import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/login';
import * as login from '../actions/loginActions';
import * as user from '../actions/userActions';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, login, user), dispatch);
}

const mapStateToProps = (state) => Object.assign({}, state, {
    token: state.token,
    user: state.user,
});

const container = connect(mapStateToProps, mapDispatchToProps)(Login);

// We use the gql tag to parse our query string into a query document
const authenticate = gql`
  query auth($user:String, $password:String) {
authenticate(user:$user, password:$password) {
    token
  }
}
`;

// export default graphql(authenticate, { options: {
//     variables: {
//         user: 'root', password: '123'
//     }
// }})(container);

export default container
