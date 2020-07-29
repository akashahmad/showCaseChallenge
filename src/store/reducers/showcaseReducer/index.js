import * as ACTION_TYPES from '../../actions/actionTypes';

const initialState = {
    educations: [],
    universities:[]

};

const ShowCaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_UNIVERSITIES:
            return {
                ...state,
                universities: action.payload,
            };
        case ACTION_TYPES.SET_EDUCATIONS:
            return {
                ...state,
                educations: action.payload,
            };
        default:
            return state;
    }
};


export default ShowCaseReducer;
