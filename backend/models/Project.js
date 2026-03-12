import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    stack: [String],
    category: String,
    liveUrl: String,
    githubUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
