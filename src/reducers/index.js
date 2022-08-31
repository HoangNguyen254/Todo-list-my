import { combineReducers } from 'redux';
import todos from './todoReducer';
import modal from './modalReducer'

const reducer = combineReducers({
  todos,
  modal
});
export default reducer;
