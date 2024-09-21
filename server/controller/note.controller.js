import Note from "../models/note.model.js";
import { errorHandler } from "../utils/error.js";

export const addNote = async (req, res, next) => {
  const { title, content, tags } = req.body;

  const { id } = req.user;

  if (!title) {
    return next(errorHandler(400, "Title is required"));
  }

  if (!content) {
    return next(errorHandler(400, "Content is required"));
  }

  try {
    const note = new Note({
      title,
      content,
      tags: tags || [],
      userId: id,
    });

    await note.save();

    res.status(201).json({
      success: true,
      message: "Note added successfully",
      note,
    });
  } catch (error) {
    next(error);
  }
};

export const editNote = async (req, res, next) => {
  const note = await Note.findByIdAndUpdate(req.params.noteId);

  if (!note) {
    next(errorHandler(404, "Note not found"));
  }

  if (req.user.id !== note.userId) {
    return next(errorHandler(401, "You can only update your own note!"));
  }
  const { title, content, tags, isPinned } = req.body;

  if (!title && !content && !tags) {
    next(errorHandler(400, "No field to update"));
  }

  try {
    if (title) {
      note.title = title;
    }
    if (content) {
      note.content = content;
    }
    if (tags) {
      note.tags = tags;
    }
    if (isPinned) {
      note.isPinned = isPinned;
    }
    await note.save();
    // const savedNote = await Note.findById(note._id);
    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      note,
    });
  } catch (err) {
    next(err);
  }
};

// controller to get all notes

export const getAllNote = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const note = await Note.find({ userId }).sort({ isPinned: -1 });
    res.status(200).json({
      success: true,
      message: "All notes fetched successfully",
      note,
    });
  } catch (err) {
    next(err);
  }
};

// controller for deleting the notes by its id
export const deleteNote = async (req, res, next) => {
  const { noteId } = req.params;
  try {
    const note = await Note.findByIdAndDelete(noteId);

    if (!note) {
      return next(errorHandler(404, "Note not found"));
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

// controllers to get note by id
export const getNoteById = async (req, res, next) => {
  const { noteId } = req.params;
  try {
    const note = await Note.findById(noteId);
    if (!note) {
      return next(errorHandler(404, "Note not found"));
    }
    res.status(200).json({
      success: true,
      message: "Note fetched successfully",
      note,
    });
  } catch (err) {
    next(err);
  }
};

export const pinNote = async (req, res, next) => {
  const { noteId } = req.params;

  try {
    const note = await Note.findById(noteId);
    if (!note) {
      return next(errorHandler(404, "Note not found"));
    }
    const isPinned = req.body;
    note.isPinned = isPinned;
    await note.save();

    res.status(200).json({
      success: true,
      message: "Note pinned successfully",
    });
  } catch (err) {
    next(err);
  }
};
