import axios from "axios";
import { findBestMatch } from "string-similarity";

const RESCUE_URL = `http://api.petfinder.com`;
const { RESCUE_KEY } = process.env;

const bi = axios.create({ baseURL: RESCUE_URL });

const getBreed = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await bi.get(
        `/breed.list?format=json&key=${RESCUE_KEY}&animal=dog`
      );
      const bread = data.petfinder.breeds.breed;
      const breeds = bread.map(breed => breed.$t);
      resolve(breeds);
    } catch (e) {
      reject(e);
    }
  });

const fuzzySearch = (breed, breeds) =>
  new Promise(resolve => {
    const { bestMatch } = findBestMatch(breed, breeds);
    const { target } = bestMatch;
    resolve(target);
  });

export default { getBreed, fuzzySearch };
