import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSettings } from "../hooks.js";

const magazineSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    issueNumber: {
      type: Number,
      required: true,
    },
    publischer: {
      type: Schema.Types.ObjectId,
      ref: "publisher",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

magazineSchema.post("save", handleSaveError);

magazineSchema.pre("findOneAndUpdate", setUpdateSettings);

magazineSchema.post("findOneAndUpdate", handleSaveError);

const Magazine = model("magazine", magazineSchema);

export default Magazine;
