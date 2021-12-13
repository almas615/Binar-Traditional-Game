export const setUserLogin = () => ({
  type: 'USER_LOG_IN',
});

export const setUserLogout = () => ({
  type: 'USER_LOG_OUT',
});

export const setUserId = (id) => ({
  type: 'USER_SET_ID',
  payload: id,
});

export function getUser() {
  return function (dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'USER_DATA_LOADED',
          payload: json,
        });
      });
  };
}

export function getPlayedGame() {
  let apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  return function (dispatch) {
    return fetch(`${apiUrl}/user/playedGame`, {
      method: 'get', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'GAME_DATA_LOADED',
          payload: json.data,
        });
      });
  };
}
