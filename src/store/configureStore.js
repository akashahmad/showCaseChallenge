import { combineReducers } from 'redux';
import ShowCase from './reducers/showcaseReducer'
import Login from './reducers/login'
const reducers = combineReducers({
    showCase: ShowCase,
    login: Login
});
export default reducers;