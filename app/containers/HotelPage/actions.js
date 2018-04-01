
import {
    GET_HOTEL_LIST_REQUEST,
    GET_HOTEL_LIST_SUCCESS,

    CREATE_HOTEL_REQUEST,
    CREATE_HOTEL_SUCCESS,
    HOTEL_REQUEST_FAILURE,
  } from './constants';

export function createHotelRequest(hotel) {
  return {
    type: CREATE_HOTEL_REQUEST,
    hotel,
  };
}

export function createHotelSuccess() {
  return {
    type: CREATE_HOTEL_SUCCESS,
  };
}

export function getHotelListRequest(filter, limit, offset) {
  return {
    type: GET_HOTEL_LIST_REQUEST,
    filter,
    limit,
    offset,
  };
}

export function getHotelListSuccess(hotels) {
  return {
    type: GET_HOTEL_LIST_SUCCESS,
    hotels,
  };
}

export function hotelRequestFailure(error) {
  return {
    type: HOTEL_REQUEST_FAILURE,
    error,
  };
}

