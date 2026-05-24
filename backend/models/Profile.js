import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    caption: String,
    image: String
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);