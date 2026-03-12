import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: String,
    image: String,
    content: String
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
