import fetchService from "../services/fetch";

const read = async (req, res) => {
  const { breed, zip } = req.query;

  try {
    const woof = await fetchService.getDog(breed, zip);
    res.send({ woof });
  } catch (e) {
    res.status(400).send(e);
  }
};

export default { read };
