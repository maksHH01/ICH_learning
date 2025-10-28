import Tag from "../db/models/Tag.js";

export const createTagController = async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getTagsController = async (req, res) => {
  try {
    const tags = await Tag.find().populate("articles");
    res.json(tags);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
