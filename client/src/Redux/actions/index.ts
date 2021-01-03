import { Hotel } from './../../types';
import axios from 'axios';
import {
  SWITCH_VIEW,
  AUTH_USER,
  DELETE_HOTEL,
  SEARCH_HOTELS,
  FETCH_HOTELS,
  ADD_HOTEL,
  FETCH_USER,
  ERROR,
  SET_THEME,
} from '../../types';

//******* HOTEL *********//
export const fetchHotels = () => async (dispatch: any) => {
  const onSuccess = (success: Hotel[]) => {
    dispatch({
      type: FETCH_HOTELS,
      payload: success,
    });
    return success;
  };

  try {
    const response = await axios.get('/api/hotels');
    return onSuccess(response.data.hotels);
  } catch (e) {
    dispatch(systemError(e));
  }
};

export const searchHotels = (text: string) => ({
  type: SEARCH_HOTELS,
  text,
});

export const addHotel = (values: Hotel) => ({
  type: ADD_HOTEL,
  payload: values,
});

export const deleteHotel = (id: number) => async (dispatch: any) => {
  if (id === 0) {
    dispatch({
      type: DELETE_HOTEL,
      payload: false,
    });
  } else {
    try {
      const res = await axios.delete(`/api/hotels/${id}`);
      dispatch({
        type: DELETE_HOTEL,
        payload: res.data,
      });
    } catch (e) {
      dispatch(systemError(e));
    }
  }
};

//******* AUTH *********//
export const signUpUser = (formProps: any, callback: any) => async (
  dispatch: any,
) => {
  try {
    const response = await axios.post('/api/signup', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });
    callback();
  } catch (e) {
    dispatch(systemError('Email is in use'));
  }
};

export const signInUser = (formProps: any, callback: any) => async (
  dispatch: any,
) => {
  try {
    const response = await axios.post('/api/signin', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });

    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch(systemError('Invalid credentials'));
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: '',
  };
};

export const fetchUser = () => async (dispatch: any) => {
  const response = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};

export const submitSurvey = (values: any, history: any) => async (
  dispatch: any,
) => {
  let formData = new FormData();
  for (const key of Object.keys(values.hotel_images)) {
    formData.append('hotel_images', values.hotel_images[key]);
  }

  formData.append('hotel_name', values.hotel_name);
  formData.append('hotel_adress', values.hotel_adress);
  formData.append('hotel_city', values.hotel_city);
  formData.append('hotel_province', values.hotel_province);
  formData.append('hotel_price', values.hotel_price);
  formData.append('hotel_distance', values.hotel_distance);
  formData.append('hotel_description', values.hotel_description);
  formData.append('hotel_stars', values.hotel_stars);
  formData.append('hotel_rating', values.hotel_rating);
  formData.append('hotel_reviews', values.hotel_reviews);
  formData.append('is_new', values.is_new);
  formData.append('is_apartment', values.is_apartment);
  formData.append('facilities_restaurant', values.facilities_restaurant);
  formData.append('facilities_gym', values.facilities_gym);
  formData.append('facilities_wifi', values.facilities_wifi);
  formData.append('facilities_card_payment', values.facilities_card_payment);
  formData.append('facilities_game_room', values.facilities_game_room);

  const res = await axios.post('/api/hotels', formData);
  //const res = await axios.post('/api/hotels', values);

  console.log('AC:', res);
  history.push('/add/success');

  // dispatch({
  // 	type: types.SUBMIT_SURVEY,
  // 	payload: res.data.createdHotel
  // });
};

//******* SYSTEM *********//
export const systemError = (error: any) => {
  return {
    type: ERROR,
    payload: error,
  };
};

export const switchView = (id: string) => ({
  type: SWITCH_VIEW,
  id,
});

export const setTheme = (value: string) => {
  const theme = value ? 'theme-dark' : 'theme-light';
  localStorage.setItem('theme', theme);

  return {
    type: SET_THEME,
    payload: theme,
  };
};
