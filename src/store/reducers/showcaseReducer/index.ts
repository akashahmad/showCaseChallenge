import * as ACTION_TYPES from '../../actions/actionTypes';

const initialState = {
    universities: null,
};

const ShowCaseReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ACTION_TYPES.GET_UNIVERSITIES_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default ShowCaseReducer;
