import { Router } from "express";
import { getMessages, deleteMessage } from "../controllers/contactController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.get("/", protect, getMessages);
router.delete("/:id", protect, deleteMessage);

export default router;
