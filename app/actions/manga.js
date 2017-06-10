export const ADD_MANGA = 'ADD_MANGA';

export function addManga(name, description) {
  return {
      type: ADD_MANGA,
      payload: {name: name, description: description, completed: false}
  };
}
