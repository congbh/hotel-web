import { fromJS } from 'immutable';

import {
    CREATE_HOTEL_REQUEST,
    CREATE_HOTEL_SUCCESS,

    GET_HOTEL_LIST_REQUEST,
    GET_HOTEL_LIST_SUCCESS,

    HOTEL_REQUEST_FAILURE,
} from './constants';


// The initial state of the App
const initialState = fromJS({
  hotels: null,
  loading: false,
  error: null,
});

function hotelReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOTEL_LIST_REQUEST:
      return { ...initialState, loading: true };

    case GET_HOTEL_LIST_SUCCESS:
      return {
        ...state,
        hotels: action.hotels,
        loading: false,
        error: null,
      };

    case CREATE_HOTEL_REQUEST:
      return { ...initialState, loading: true };

    case CREATE_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case HOTEL_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export default hotelReducer;
