import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSettings } from "../hooks.js";

const productShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

productShema.post("save", handleSaveError);

productShema.pre("findOneAndUpdate", setUpdateSettings);

productShema.post("findOneAndUpdate", handleSaveError);

const Product = model("products", productShema);

export default Product;
