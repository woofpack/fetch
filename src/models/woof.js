import mongoose from "mongoose";

const woofModel = mongoose.model(
  "Woof",
  new mongoose.Schema({
    src: { type: String, required: true },
    timestamp: { type: Date, default: Date.now() }
  })
);

export default woofModel;
