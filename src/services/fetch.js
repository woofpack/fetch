import axios from "axios";
import { stringify } from "querystring";

const { RESCUE_SECRET, RESCUE_KEY} = process.env;

const RESCUE_URL = `http://api.petfinder.com`;

const di = axios.create({ baseURL: RESCUE_URL });

const getDog = (breed, zip) =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await di.get(
        `/pet.find?format=json&key=${RESCUE_KEY}&location=${zip}&animal=dog&breed=${breed}`
      );

      const { petfinder } = data;
      const { pets } = petfinder;
      const { pet } = pets;

      resolve(pet[0]);
    } catch (e) {
      reject(e);
    }
  });

const getShelter = shelterId =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await di.get(
        `/shelter.get?format=json&key=${RESCUE_KEY}&id=${shelterId}`
      );

      const { petfinder } = data;
      const { shelter } = petfinder;

      resolve(shelter);
    } catch (e) {
      reject(e);
    }
  });
  

export default { getDog, getShelter };
