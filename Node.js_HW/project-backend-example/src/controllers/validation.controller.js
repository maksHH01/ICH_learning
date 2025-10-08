import * as rules from "../constants/validation.js";

export const getValidationRuluesController = (req, res) => {
  res.json(rules);
};
