import mongoose, { Schema, model, Document } from "mongoose";

export interface UserDociment extends Document {
  initialBalance: number;
}
