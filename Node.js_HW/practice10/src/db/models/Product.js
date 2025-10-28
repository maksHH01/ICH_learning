import { Schema, model } from "mongoose";

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  category: {
    type: String,
    enum: ["books", "telephons", "keyboards"],
    required: true,
  },
});

const Product = model("Product", productsSchema);

export default Product;
