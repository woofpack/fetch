import cloudinary from "cloudinary";

const { CLOUDINARY_SECRET, CLOUDINARY_KEY, CLOUDINARY_BUCKET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_BUCKET,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET
});

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

export default { upload };
