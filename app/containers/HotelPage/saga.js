import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotelList,
} from 'services/api';

import {
    createHotelSuccess,
    deleteHotelSuccess,
    updateHotelSuccess,
    getHotelListSuccess,
    hotelRequestFailure,
} from './actions';

import {
  CREATE_HOTEL_REQUEST,
  DELETE_HOTEL_REQUEST,
  UPDATE_HOTEL_REQUEST,
  GET_HOTEL_LIST_REQUEST,
} from './constants';


export function* fetchHotelList({ filter = null, limit = null, offset = null }) {
  try {
    const hotels = yield call(getHotelList, filter, limit, offset);
    yield put(getHotelListSuccess(hotels));
  } catch (err) {
    yield put(hotelRequestFailure(err));
  }
}

export function* onCreateHotel({ hotel }) {
  try {
    const result = yield call(createHotel, hotel);
    if (result) {
      yield put({
        type: GET_HOTEL_LIST_REQUEST,
        filter: null,
        limit: null,
        offset: null,
      });
      yield put(createHotelSuccess());
    }
  } catch (err) {
    yield put(hotelRequestFailure(err));
  }
}

export function* onDeleteHotel({ id }) {
  try {
    const result = yield call(deleteHotel, id);
    if (result) {
      yield put({
        type: GET_HOTEL_LIST_REQUEST,
        filter: null,
        limit: null,
        offset: null,
      });
      yield put(deleteHotelSuccess());
    }
  } catch (err) {
    yield put(hotelRequestFailure(err));
  }
}

export function* onUpdateHotel({ hotel }) {
  try {
    const result = yield call(updateHotel, hotel);
    if (result) {
      yield put({
        type: GET_HOTEL_LIST_REQUEST,
        filter: null,
        limit: null,
        offset: null,
      });
      yield put(updateHotelSuccess());
    }
  } catch (err) {
    yield put(hotelRequestFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  yield takeLatest(CREATE_HOTEL_REQUEST, onCreateHotel);
  yield takeLatest(DELETE_HOTEL_REQUEST, onDeleteHotel);
  yield takeLatest(UPDATE_HOTEL_REQUEST, onUpdateHotel);
  yield takeLatest(GET_HOTEL_LIST_REQUEST, fetchHotelList);
}
