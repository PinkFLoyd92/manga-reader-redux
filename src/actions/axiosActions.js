export const fetchMangas = () => {
    return {
        type: 'REQUEST',
        payload: {
            request:{
                url: '/mangas'
            }
        }
    };
};
