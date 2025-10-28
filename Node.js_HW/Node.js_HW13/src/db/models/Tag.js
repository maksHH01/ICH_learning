import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "../hooks.js";

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    articles: [
      {
        type: Schema.Types.ObjectId,
        ref: "article",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

tagSchema.post("save", handleSaveError);
tagSchema.pre("findOneAndUpdate", setUpdateSettings);
tagSchema.post("findOneAndUpdate", handleSaveError);

const Tag = model("tag", tagSchema);

export default Tag;
