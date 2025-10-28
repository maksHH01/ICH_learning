import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "../hooks.js";

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },

    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "tag",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

articleSchema.post("save", handleSaveError);
articleSchema.pre("findOneAndUpdate", setUpdateSettings);
articleSchema.post("findOneAndUpdate", handleSaveError);

const Article = model("article", articleSchema);

export default Article;
