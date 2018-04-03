import axios from 'utils/axiosInstance';

export const login = async (email, password) => {
  try {
    const { data } = await axios.post('/users/auth', {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMyProfile = async () => {
  try {
    const { data } = await axios.get('/users/me');
    return data;
  } catch (error) {
    throw error;
  }
};

export const getHotelList = async (filter = null, limit = null, offset = null) => {
  try {
    const { data } = await axios.get('/hotels', {
      params: {
        filter,
        limit,
        offset,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const createHotel = async (hotel) => {
  try {
    const { data } = await axios.post('/hotels', { ...hotel });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteHotel = async (id) => {
  try {
    const { data } = await axios.delete(`/hotels/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateHotel = async ({ id, ...rest }) => {
  try {
    const { data } = await axios.put(`/hotels/${id}`, { ...rest });
    return data;
  } catch (error) {
    throw error;
  }
};
