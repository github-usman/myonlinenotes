import React, { useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import { useContext } from "react";

function EditNote() {
    const context = useContext(NoteContext);
    const {editNotes} = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "default" });
  const handleClick = (e) => {
    e.preventDefault();

    editNotes(note.title,note.description,note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className="my-3 ">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              {/* {addNote.title} */}
              Title
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="description"
              name="description"
            />
          </div>
       
          <button
            
            type="submit"
            className="btn btn-primary"
            
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditNote;
