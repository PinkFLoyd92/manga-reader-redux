export const FETCHED_MANGAS = 'FETCHED_MANGAS';
export const loadMangas = (mangas=[]) => {
    return {
        type: FETCHED_MANGAS,
        payload: {
            mangas
        }
    };
};
