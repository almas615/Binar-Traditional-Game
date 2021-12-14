import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './userReducer';
import { getPlayedReducer } from './getPlayedReduer';

const reducer = combineReducers({
  played: getPlayedReducer,
  register: registerReducer,
  login: loginReducer,
});

export default reducer;
