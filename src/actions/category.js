import api from '../utils/api';
import {GET_DATA, DATA_ERROR, ADD_CATEGORY} from './types';

export const getApiData = () => async (dispatch) => {
  try {
    const res = await api.get('/');

    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: {msg: 'server error'},
    });
  }
};

export const addCategory =
  ({name, description, movies = []}) =>
  async (dispatch) => {
    try {
      const res = await api.post('/', {name, description, movies});

      dispatch({
        type: ADD_CATEGORY,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: {msg: 'server error'},
      });
    }
  };
