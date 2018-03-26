import {
  SAVE_FORM,
  RECEIVE_COUNTRIES,
  SET_GREETING,
  SET_LANG,
  REQUEST_COUNTRIES,
  HANDLE_ERROR
} from "../actions";

export const initialState = {
  greeting: null,
  countries: [],
  loading: false,
  list: [],
  translations: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORM:
      return {
        ...state,
        list: [...state.list, action.payload],
        greeting: action.payload
      };

    case RECEIVE_COUNTRIES:
      return { ...state, countries: action.payload, loading: false };

    case SET_GREETING:
      return { ...state, greeting: action.payload };

    case SET_LANG:
      return { ...state, translations: action.payload };

    case REQUEST_COUNTRIES:
      return { ...state, loading: true };

    case HANDLE_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
