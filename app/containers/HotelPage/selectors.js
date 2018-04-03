import { createSelector } from 'reselect';

const getHotelState = (state) => state.get('hotel');

const makeSelectHotel = () => createSelector(
    getHotelState,
  ({ hotels, loading, error, completed }) => ({ hotels, loading, error, completed })
);

export {
    getHotelState,
    makeSelectHotel,
};
