import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSettings } from "../hooks.js";

const publischerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

publischerSchema.post("save", handleSaveError);

publischerSchema.pre("findOneAndUpdate", setUpdateSettings);

publischerSchema.post("findOneAndUpdate", handleSaveError);

const Publischer = model("publisher", publischerSchema);

export default Publischer;
