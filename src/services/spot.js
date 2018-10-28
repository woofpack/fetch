import cloudinary from "cloudinary";
import axios from "axios";

const {
  CLOUDINARY_SECRET,
  CLOUDINARY_KEY,
  CLOUDINARY_BUCKET,
  CLASSIFY_URL
} = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_BUCKET,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET
});

const si = axios.create({ baseURL: CLASSIFY_URL });

const uploadCloudinary = path =>
  new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(path, (err, result) => {
      if (err) reject(err);
      const { secure_url } = result;
      resolve(secure_url);
    });
  });

const upload = path =>
  new Promise(async (resolve, reject) => {
    try {
      const url = await uploadCloudinary(path);
      resolve(url);
    } catch (e) {
      reject(e);
    }
  });

const classify = url =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await si.post("/dog", { url });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default { upload, classify };
