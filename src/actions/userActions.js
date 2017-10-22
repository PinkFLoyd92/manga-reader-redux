export const AUTHENTICATED = 'AUTHENTICATED';
export const AUTHENTICATING = 'AUTHENTICATING';
export const authenticate = (user, password) => {
    return {
        type: 'AUTHENTICATING',
        payload: {
            user: {
                name: user,
                password
            }
        }
    };
};
