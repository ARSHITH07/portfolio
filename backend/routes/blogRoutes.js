import { Router } from "express";
import { getBlogs, getBlogById, createBlog, deleteBlog } from "../controllers/blogController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", protect, createBlog);
router.delete("/:id", protect, deleteBlog);

export default router;
