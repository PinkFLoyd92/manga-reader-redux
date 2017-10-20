import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/login';
import * as login from '../actions/loginActions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, login), dispatch);
}

const mapStateToProps = (state) => Object.assign({}, state, {
    token: state.token,
    userName: state.userName
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
