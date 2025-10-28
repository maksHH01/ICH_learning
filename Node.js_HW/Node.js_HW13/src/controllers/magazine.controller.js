import Magazine from "../db/models/Magazine.js";

export const getMagazinesController = async (req, res) => {
  try {
    const magazines = await Magazine.find().populate("publischer");
    res.json(magazines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createMagazineController = async (req, res) => {
  try {
    const magazine = await Magazine.create(req.body);
    res.status(201).json(magazine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
