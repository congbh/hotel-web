import { createSelector } from 'reselect';

const getHotelState = (state) => state.get('hotel');

const makeSelectHotel = () => createSelector(
    getHotelState,
  ({ hotels, loading, error }) => ({ hotels, loading, error })
);

export {
    getHotelState,
    makeSelectHotel,
};
