import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import TagInput from "../components/input/TagInput";

const AddEditNotes = ({ onClose, noteData, type }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState(["tagsf", "tag2", "tags6"]);

  const [error, setError] = useState("");

  const addNote = () => {};
  const editNote = () => {};
  const handleAddNotes = () => {
    if (!title) {
      setError("Please enter the Title");
      return;
    }
    if (!content) {
      setError("Enter the content");
      return;
    }
    setError("");
    if (type == "add") {
      addNote();
    } else {
      editNote();
    }
  };
  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justrify-center absolute -top-3 -right-3 "
        onClick={onClose}
      >
        <MdClose className="text-4xl text-red-400 font-bold" />
      </button>

      <div className="flex  flex-col gap-2 mt-4">
        <label className="input-label text-red-400 uppercase text-lg">
          Title
        </label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none bg-slate-50 p-2 rounded-2xl"
          placeholder="Wake up at 6am"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-red-400 uppercase text-lg">
          Content
        </label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2  rounded-2xl"
          placeholder="conent"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <div className="mt-3">
        <label className="input-label text-red-400 uppercase">tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-red-500 text-sm pb-1">{error}</p>}

      <button className="btn-primary" onClick={handleAddNotes}>
        Add Notes
      </button>
    </div>
  );
};

export default AddEditNotes;
