import axios from 'axios';
import url from 'url';

const {GOOGLE_URL, GOOGLE_KEY } = process.env;
const gi = axios.create({baseURL: `GOOGLE_URLkey=${GOOGLE_KEY}`});

const getShelterSite = (shelterName) => 
  new Promise(async(resolve, reject) => {
    const parseShelter = url.parse(shelterName).path;
    try{
        const data = await gi.get(`&q=${parseShelter}`);
        console.log(data);
        resolve(data);
    } catch (e) {
        reject(e);
    }

  });

export default {getShelterSite}