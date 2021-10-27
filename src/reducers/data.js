import {
  GET_DATA,
  DATA_ERROR,
  ADD_CATEGORY,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
} from '../actions/types';

const initialState = {
  data: [],
  loading: true,
  error: {},
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case ADD_CATEGORY:
      return {
        ...state,
        data: [payload, ...state.data],
        loading: false,
      };

    //movies reducers
    case ADD_MOVIE:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case EDIT_MOVIE:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case DELETE_MOVIE:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case DATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
