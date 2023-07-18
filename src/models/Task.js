import { Schema, model } from "mongoose";

const taslSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
    },
    done: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Task", taslSchema);
