import Article from "../db/models/Article.js";

export const createArticleController = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getArticlesController = async (req, res) => {
  try {
    const articles = await Article.find().populate("tags");
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
