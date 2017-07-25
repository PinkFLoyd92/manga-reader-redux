export const TOGGLE_DRAW = 'TOGGLE_DRAW';

export const toggleDraw = (bool) => {
	return {
		type: TOGGLE_DRAW,
	    payload: {bool}
	};
};
