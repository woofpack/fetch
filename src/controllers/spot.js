import { saveBase64, cleanup } from "../services/file";
import spotService from "../services/spot";
import woof from "../models/woof";
import fetch from "../services/fetch";
import urlParse from "url";
import bread from "../services/breed";
import search from '../services/search';

const create = async (req, res) => {
  const { data, zip } = req.body;
  try {
    const path = await saveBase64(data);
    const url = await spotService.upload(path);

    await woof.create({ src: url });
    await cleanup(path);

    const { breed } = await spotService.classify(url);
    const breeds = await bread.getBreed();
    const fuzzyBreed = await bread.fuzzySearch(breed, breeds);
    const parseBreed = urlParse.parse(fuzzyBreed).path;
    const dog = await fetch.getDog(parseBreed, zip);
    console.log(dog);

    const { latitude, longitude, name } = await fetch.getShelter(
      dog.shelterId.$t
    );
    
    const shelterUrl = await search.getShelterSite(name.$t);
    console.log("shelter", shelterUrl)

    const payload = {
      lat: latitude.$t,
      lng: longitude.$t,
      info: {
        breed: breed,
        shelterName: name.$t,
        name: dog.name.$t,
        sex: dog.sex.$t,
        description: dog.description.$t,
        status: dog.status.$t,
        age: dog.age.$t,
        photo: dog.media.photos.photo[0].$t,
        url: 'https://www.peggyadams.org/'
      }
    };

    console.log(payload);

    res.status(200).send(payload);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export default { create };
