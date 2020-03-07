import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';
import { navigate } from '../navigationRef';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { ...state, token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'signout':
      return {token:null,errorMessage:''}
    default:
      return state;
  }
};

// Auto login with check token is available in AsyncStorage?
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({
      type: 'signin',
      payload: token
    });
    navigate('TrackList');
  } else {
    navigate('Signin');
  }
};

// Hide error when navigate with different screens
const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

/* Both signup and Signin
  make post request to get token
  Store at AsyncStorage
  Dispath 
  Navigate to different Screen
*/

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signup'
    })
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    })
  }
};


const signout = (dispatch) =>  async () => {
  await AsyncStorage.removeItem('token');
  dispatch({
    type:'signout'
  });
  navigate('loginFlow');
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);