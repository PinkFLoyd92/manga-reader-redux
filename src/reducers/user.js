import { AUTHENTICATING, AUTHENTICATED } from '../actions/userActions';
import { gClient as axiosClient } from '../index';

const authQuery = `
  query auth($user:String, $password:String) {
authenticate(user:$user, password:$password) {
    token
  }
}
`;

function user(state=[], action){
    switch(action.type) {
    case AUTHENTICATING:
        axiosClient.post('/', {
            query: authQuery,
            variables: {
                user: 'root',
                password: '123'
            }
        })
            .then(function (response) {
                console.log(response);
                return action.payload.user;
            })
            .catch(function (error) {
                console.log(error);
            });
    default:
        return state;
    } 
}

export { user };
