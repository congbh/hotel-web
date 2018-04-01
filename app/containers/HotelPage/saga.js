import { call, put, takeLatest } from 'redux-saga/effects';
import { createHotel, getHotelList } from 'services/api';
import {
    createHotelSuccess,
    getHotelListSuccess,
    hotelRequestFailure,
} from './actions';

import {
  GET_HOTEL_LIST_REQUEST,
  CREATE_HOTEL_REQUEST,
} from './constants';

export function* onGetHotelList({ filter, limit, offset }) {
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
      yield put(createHotelSuccess());
    }
  } catch (err) {
    yield put(hotelRequestFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  yield takeLatest(GET_HOTEL_LIST_REQUEST, onGetHotelList);
  yield takeLatest(CREATE_HOTEL_REQUEST, onCreateHotel);
}
