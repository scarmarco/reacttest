import { setLang } from "../actions";
import en from "./en.json";
import es from "./es.json";
import pt from "./pt.json";

export const handleLang = (lang = "english", store) => {
  if (lang === "english") {
    store.dispatch(setLang(en));
  } else if (lang === "spanish") {
    store.dispatch(setLang(es));
  } else if (lang === "portuguese") {
    store.dispatch(setLang(pt));
  } else {
    store.dispatch(setLang(en));
  }
};
