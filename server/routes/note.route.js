import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { addNote, editNote } from "../controller/note.controller.js";

const router = express.Router();

router.post("/addNote", verifyToken, addNote);
router.put("/edit/:noteId", verifyToken, editNote);
export default router;
