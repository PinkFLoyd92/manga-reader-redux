export function loadMangas() {
    return {
        types: ['LOAD','AWESOME','OH_NO'],
        payload: {
            request:{
                url:'/mangas'
            }
        }
    };
}
