import api from '../utils/api';
import {DATA_ERROR, ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} from './types';

export const addMovie =
  ({name, description, categoryId}) =>
  async (dispatch, getState) => {
    try {
      const categories = getState().AppData.data.map((item) => {
        if (item.id === categoryId) {
          return {
            ...item,
            movies: [
              ...item.movies,
              {
                name,
                description,
                id: Math.floor(100000 + Math.random() * 900000),
              },
            ],
          };
        }
        return item;
      });

      const category = categories.filter((item) => item.id === categoryId)[0];

      await api.put(`/${categoryId}`, category);
      dispatch({
        type: ADD_MOVIE,
        payload: categories,
      });
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: {msg: 'server error'},
      });
    }
  };

export const editMovie =
  ({name, description, id, categoryId}) =>
  async (dispatch, getState) => {
    try {
      const categories = getState().AppData.data.map((item) => {
        if (item.id === categoryId) {
          return {
            ...item,
            movies: item.movies.map((movie) => {
              if (movie.id === id) {
                return {...movie, name, description};
              }
              return movie;
            }),
          };
        }

        return item;
      });

      const category = categories.filter((item) => item.id === categoryId)[0];

      await api.put(`/${categoryId}`, category);

      dispatch({
        type: EDIT_MOVIE,
        payload: categories,
      });
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: {msg: 'server error'},
      });
    }
  };

export const deleteMovie =
  ({id, categoryId}) =>
  async (dispatch, getState) => {
    try {
      const categories = getState().AppData.data.map((item) => {
        if (item.id === categoryId) {
          return {
            ...item,
            movies: item.movies.filter((movie) => movie.id !== id),
          };
        }

        return item;
      });

      const category = categories.filter((item) => item.id === categoryId)[0];

      await api.put(`/${categoryId}`, category);

      dispatch({
        type: DELETE_MOVIE,
        payload: categories,
      });
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: {msg: 'server error'},
      });
    }
  };
