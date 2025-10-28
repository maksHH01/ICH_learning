import { Schema, model } from "mongoose";

import { email } from "../../constants/validation.js";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("user", userSchema);

export default User;
