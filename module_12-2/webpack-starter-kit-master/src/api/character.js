import {DEFAULT_CHARACTER_URL} from "./constants";
import {transformCharacters} from "./helpres";

export const getCharacters = (url = DEFAULT_CHARACTER_URL) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => transformCharacters(data));
}
