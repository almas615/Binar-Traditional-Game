import { combineReducers } from 'redux';
import { authReducer, userReducer } from './userReducer';
import { getPlayedReducer } from './getPlayedReduer';

const reducer = combineReducers({
  playedGames: getPlayedReducer,
  auth: authReducer,
  user: userReducer,
});

export default reducer;
