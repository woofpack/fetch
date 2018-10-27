import { writeFileSync, unlink } from "fs";
import path from "path";
import uuid from "uuid/v4";

/**
 * Async write to disk
 * @param {String} dest
 * @param {String} buffer
 */
const writeFileAsync = (dest, buffer) =>
  Promise.resolve(writeFileSync(dest, buffer, "base64"));

/**
 * Save a Base64 image into disk
 * @param {String} buffer
 */
const saveBase64 = buffer =>
  new Promise(async (resolve, reject) => {
    try {
      const filepath = path.resolve(`tmp/${uuid()}.jpg`);
      const base64Data = buffer.replace(/^data:([A-Za-z-+/]+);base64,/, "");
      await writeFileAsync(filepath, base64Data);
      resolve(filepath);
    } catch (e) {
      reject(e);
    }
  });

/**
 * Remove path
 * @param {String} path
 */
const cleanup = path =>
  new Promise((resolve, reject) => {
    unlink(path, err => (err ? reject(err) : resolve()));
  });

export { saveBase64, cleanup };
