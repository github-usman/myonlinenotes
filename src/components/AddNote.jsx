import React, { useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

function AddNote(props) {
  const context = useContext(NoteContext);
  const { addNotes } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNotes(note.title, note.description, note.tag);
    setNote({ title: "",
    description: "",
    tag: "",})
    props.showAlert("Added successfully","success");
  };

  // for fomatted coppy

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3 ">
        <div className="text-center pb-2">
   
      <FontAwesomeIcon
         style={{height:"40px",marginTop:"10px",color:"blue"}}
        role="button"
       
        data-bs-toggle="collapse" 
        data-bs-target="#collapseExample" 
        aria-expanded="false" 
        bounce 
        aria-controls="collapseExample"
      icon={faCirclePlus}
      />
   
      </div>
      <div className="collapse" id="collapseExample">
         <div className="card card-body">
         
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
              minLength={5}
              required
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
             Description  (<span style={{fontWeight:"10px",color:"grey"}}>to <span style={{backgroundColor:"yellow"}}>Highlight</span> enclosed that sentence with *** and for <strong>bold</strong> enclosed with %%</span>)
            </label>
            <textarea
              onChange={onChange}
              type="text"
              className="form-control"
              id="description"
              name="description"
              rows="6"
              minLength={5}
              required
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
            />
          </div>

          <button
            onClick={handleClick}
            type="submit"
            className="btn btn-primary"
            disabled={note.title.length<5 || note.description.length<5 } 
          >
            Add Note
          </button>
        </form>
         </div>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
