const initialState = {
	isLoggedIn: false,
	currentUserId: '',
	allUsers: [],
    playedGames: [],
	monopoliScore:0,
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'USER_LOG_IN':
			return { ...state, isLoggedIn: true };
		case 'USER_LOG_OUT':
			return { ...state, isLoggedIn: false };
		case 'USER_SET_ID':
			return { ...state, currentUserId: action.payload };
		case 'SET_MONOPOLI_SCORE':
			return { ...state, monopoliScore: action.payload };
		case 'USER_DATA_LOADED':
			return { ...state, allUsers: action.payload };
		case 'GAME_DATA_LOADED':
			return { ...state, playedGames: action.payload };
		default:
			return state;
	}
}

export default reducer;