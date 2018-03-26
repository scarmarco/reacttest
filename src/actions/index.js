export const SAVE_FORM = "SAVE_FORM";
export const RECEIVE_COUNTRIES = "RECEIVE_COUNTRIES";
export const REQUEST_COUNTRIES = "REQUEST_COUNTRIES";
export const SET_GREETING = "SET_GREETING";
export const SET_LANG = "SET_LANG";
export const HANDLE_ERROR = "HANDLE_ERROR";

export const saveForm = form => ({
  type: SAVE_FORM,
  payload: form
});

export const receiveCountries = countries => ({
  type: RECEIVE_COUNTRIES,
  payload: countries
});

export const requestCountries = () => ({
  type: REQUEST_COUNTRIES
});

export const handleError = error => ({
  type: HANDLE_ERROR,
  payload: error
});

export const setGreeting = greeting => ({
  type: SET_GREETING,
  payload: greeting
});

export const setLang = translations => ({
  type: SET_LANG,
  payload: translations
});

export const fetchCountries = () => async dispatch => {
  dispatch(requestCountries());
  try {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    dispatch(receiveCountries(data));
  } catch (e) {
    dispatch(handleError(e));
  }
};
