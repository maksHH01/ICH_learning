import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;
