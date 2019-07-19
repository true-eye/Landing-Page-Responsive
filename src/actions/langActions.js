import { LANG } from "./types";

export function changeLang(newLang) {
  return { type: LANG.CHANGE, newLang };
}
