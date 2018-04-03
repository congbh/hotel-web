import { fromJS } from 'immutable';

import {
    CREATE_HOTEL_REQUEST,
    CREATE_HOTEL_SUCCESS,

    DELETE_HOTEL_REQUEST,
    DELETE_HOTEL_SUCCESS,

    UPDATE_HOTEL_REQUEST,
    UPDATE_HOTEL_SUCCESS,

    GET_HOTEL_LIST_REQUEST,
    GET_HOTEL_LIST_SUCCESS,

    HOTEL_REQUEST_FAILURE,
} from './constants';


// The initial state of the App
const initialState = fromJS({
  hotels: [],
  loading: false,
  error: null,
  completed: null,
});

function hotelReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOTEL_LIST_REQUEST:
      return { ...initialState, loading: true };

    case GET_HOTEL_LIST_SUCCESS:
      return {
        ...state,
        hotels: [...action.hotels],
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
        completed: true,
      };

    case DELETE_HOTEL_REQUEST:
      return { ...initialState, loading: true };

    case DELETE_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        completed: true,
      };

    case UPDATE_HOTEL_REQUEST:
      return { ...initialState, loading: true };

    case UPDATE_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        completed: true,
      };

    case HOTEL_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        completed: null,
      };

    default:
      return state;
  }
}

export default hotelReducer;
