import * as ACTION_TYPES from '../../actions/actionTypes';

const initialState = {
    name:null
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};
export default LoginReducer;
