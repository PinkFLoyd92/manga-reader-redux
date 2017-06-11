import { SELECT_MANGA } from '../actions/manga';

export default function select(state = '', action) {
  switch (action.type) {
    case SELECT_MANGA:
      return action.payload;
    default:
      return state;
  }
}
