import axios, { CancelToken } from 'axios';
import * as ACTION_TYPES from '../actionTypes';
import { apiUrl } from '../../../utils/config'
let cancel;
export const searchUniversities = (keyword) => {
    return async (dispatch) => {
        if (!keyword) {
            dispatch({
                type: ACTION_TYPES.SET_UNIVERSITIES,
                payload: [],
            });
        }
        else {
            //Make an API call and await the result
            cancel && cancel();
            axios.get(apiUrl + `/search?name=${keyword}`,
                {
                    cancelToken: new CancelToken(function executor(c) {
                        // An executor function receives a cancel function as a parameter
                        cancel = c;
                    })
                }).then(res => {
                    //dispatch success action
                    dispatch({
                        type: ACTION_TYPES.SET_UNIVERSITIES,
                        payload: res.data,
                    });
                })
        }



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
