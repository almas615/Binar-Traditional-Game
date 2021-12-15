import { combineReducers } from 'redux';
import {
  loginReducer,
  registerReducer,
  loadReducer,
  updateReducer,
} from './userReducer';
import { getPlayedReducer } from './getPlayedReduer';

const reducer = combineReducers({
  played: getPlayedReducer,
  register: registerReducer,
  login: loginReducer,
  load: loadReducer,
  update: updateReducer,
});

export default reducer;
