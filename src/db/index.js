import mongoose from "mongoose";

const { DB_URL } = process.env;

const options = { useNewUrlParser: true };

const db = () =>
  Promise.resolve(
    mongoose.connect(
      DB_URL,
      options
    )
  );

export default db;
