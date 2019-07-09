import { combineReducers } from 'redux'

const initialState = {
  allCandies: []
}

// finite ways to update state
//action type
//action creator
//case in reducer

const GET_CANDIES = 'GET_CANDIES';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const candyReducer = (candies = initialState.allCandies, action) => {
  let newCandies = JSON.parse(JSON.stringify(candies));
  switch (action.type) {
    case GET_CANDIES:
      return {...newCandies, allCandies: action.candies};
    default:
      return newCandies;
  }
};

const combindedReducers = combineReducers({
  root: rootReducer,
  candy: candyReducer
});


const gotCandy = (candy) => {
  return {type: GET_CANDIES, candy}
}

export const getCandy = () => {
  return async (dispatch, getState) => {
    const {data} = await axios.get('/api')
    dispatch(gotCandy(data));
  }
}

export default combindedReducers
