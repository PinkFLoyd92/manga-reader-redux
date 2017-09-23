import { FETCHED_MANGAS } from '../actions/mangaActions';
function mangas(state=[], action){
    switch(action.type) {
    case FETCHED_MANGAS:
        return action.payload.mangas;
    default:
        return state;
    } 
}

export { mangas };
