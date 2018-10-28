import woof from "../models/woof";

const read = async (req, res) => {
  try {
    const woofs = await woof.find().sort({ timestamp: -1 });
    res.send({ woofs });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export default { read };
