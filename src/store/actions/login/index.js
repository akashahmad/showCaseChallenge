import * as ACTION_TYPES from '../actionTypes';

export const setName = (name) => {
    return async (dispatch) => {
        // dispatch success action
        dispatch({
            type: ACTION_TYPES.SET_NAME,
            payload: name,
        });
    };
};

