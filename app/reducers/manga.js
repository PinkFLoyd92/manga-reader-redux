import { ADD_MANGA } from '../actions/manga';

const manga = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MANGA':
      return {
        name: action.payload.name,
        description: action.payload.description,
        completed: action.payload.completed
      };
    default:
      return state;
  }
};

export default function mangas(state = [], action) {
  switch (action.type) {
    case ADD_MANGA:
      return [...state, manga(undefined, action)];
    default:
      return state;
  }
}

