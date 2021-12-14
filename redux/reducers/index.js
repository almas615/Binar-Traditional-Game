import { combineReducers } from 'redux';
import { loginReducer, registerReducer, loadUserReducer } from './userReducer';
import { getPlayedReducer } from './getPlayedReduer';

const reducer = combineReducers({
  played: getPlayedReducer,
  register: registerReducer,
  login: loginReducer,
  loadUser: loadUserReducer,
});

export default reducer;
