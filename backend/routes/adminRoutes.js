import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { createProject } from "../controllers/projectController.js";
import { createBlog } from "../controllers/blogController.js";
import { getMessages } from "../controllers/contactController.js";

const router = Router();

router.use(protect);

router.post("/projects", createProject);
router.post("/blogs", createBlog);
router.get("/messages", getMessages);

export default router;
