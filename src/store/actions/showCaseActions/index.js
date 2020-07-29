// import axios from '../../../Utils/axios';
import * as ACTION_TYPES from '../actionTypes';
import { apiUrl } from '../../../utils/config'

export const setUniversities = (universities) => {
    return async (dispatch) => {
        //Make an API call and await the result
        //dispatch success action
        dispatch({
            type: ACTION_TYPES.SET_UNIVERSITIES,
            payload: universities,
        });

    };
};
export const setEducations = (educations) => {
    return async (dispatch) => {
        //dispatch success action
        dispatch({
            type: ACTION_TYPES.SET_EDUCATIONS,
            payload: educations,
        });
    };
};
