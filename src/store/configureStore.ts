import { combineReducers } from 'redux';
import ShowCase from './reducers/showcaseReducer'
const reducers = combineReducers({
    showCase: ShowCase
});
export default reducers;