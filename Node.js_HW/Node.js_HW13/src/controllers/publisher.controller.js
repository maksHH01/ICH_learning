import Publisher from "../db/models/Publisher.js";

export const getPublishersController = async (req, res) => {
  try {
    const publishers = await Publisher.find();
    res.json(publishers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createPublisherController = async (req, res) => {
  try {
    const publisher = await Publisher.create(req.body);
    res.status(201).json(publisher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
