import { saveBase64, cleanup } from "../services/file";
import spotService from "../services/spot";
import woof from "../models/woof";

const create = async (req, res) => {
  const { data } = req.body;

  try {
    const path = await saveBase64(data);
    const url = await spotService.upload(path);

    await woof.create({ src: url });

    await cleanup(path);

    res.status(200).send({ url });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export default { create };
