export const auth = () => {
    return {
        type: 'REQUEST',
        payload: {
            request:{
                url: '/login'
            }
        }
    };
};
