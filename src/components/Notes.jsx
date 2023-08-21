import NoteContext from "../context/notes/NoteContext";
import { useContext, useEffect, useRef,useState } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes,editNotes } = context;
  const [note, setNote] = useState({ id:"",etitle: "", edescription: "", etag: "default" });
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose=useRef(null);

  const updateNotes = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle: currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  };
 
  const handleClick = (e) => {
    e.preventDefault();
    
    editNotes(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <AddNote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        
      >
        Edit Notes
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-etitle" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>


            <div className="modal-body">
              <form className="my-3 ">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    {/* {addNote.title} */}
                    Title
                  </label>
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    required
                    minLength={5}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    rows="6"
                    value={note.edescription}
                    required
                    minLength={5}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Discard
              </button>
              <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5 }  onClick={handleClick} className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container row my-3">
        <h2>Your Notes</h2>
        <div>
        {notes.length ===0 && "There is no Note to show"}
        </div>
        { notes.map((note,index) => {
          return (
            <NoteItem updateNotes={updateNotes}  key={index} note={note} />
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
