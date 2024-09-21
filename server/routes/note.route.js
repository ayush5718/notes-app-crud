import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  addNote,
  deleteNote,
  editNote,
  getAllNote,
  getNoteById,
  pinNote,
} from "../controller/note.controller.js";

const router = express.Router();

router.post("/addNote", verifyToken, addNote);
router.put("/edit/:noteId", verifyToken, editNote);
router.get("/getAllNotes", verifyToken, getAllNote);
router.delete("/delete/:noteId", verifyToken, deleteNote);
router.get("/getNoteById/:noteId", verifyToken, getNoteById);
router.put("/pinNote/:noteId", verifyToken, pinNote);

export default router;
