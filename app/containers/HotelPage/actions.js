
import {
    GET_HOTEL_LIST_REQUEST,
    GET_HOTEL_LIST_SUCCESS,

    CREATE_HOTEL_REQUEST,
    CREATE_HOTEL_SUCCESS,

    DELETE_HOTEL_REQUEST,
    DELETE_HOTEL_SUCCESS,

    UPDATE_HOTEL_REQUEST,
    UPDATE_HOTEL_SUCCESS,

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

export function deleteHotelRequest(id) {
  return {
    type: DELETE_HOTEL_REQUEST,
    id,
  };
}

export function deleteHotelSuccess() {
  return {
    type: DELETE_HOTEL_SUCCESS,
  };
}

export function updateHotelRequest(hotel) {
  return {
    type: UPDATE_HOTEL_REQUEST,
    hotel,
  };
}

export function updateHotelSuccess() {
  return {
    type: UPDATE_HOTEL_SUCCESS,
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

