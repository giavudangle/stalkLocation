import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};


const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({
    type:'fetch_tracks',
    payload:response.data
  })
};

const createTrack = dispatch => async (name,locations) => {
  // make a post request to api
  //console.log(name,locations.length);
  
  //console.log(locations);
  await trackerApi.post('/tracks',{name,locations});
  const res=await trackerApi.get('/tracks');
  console.log(res.data);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);