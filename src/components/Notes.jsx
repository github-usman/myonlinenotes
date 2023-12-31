import NoteContext from "../context/notes/NoteContext";
import { useContext, useEffect, useRef,useState } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

function Notes(props) {
  const context = useContext(NoteContext);
  let navigate = useNavigate();
  const { notes, getNotes,editNotes } = context;
   
  useEffect(() => {
  const token = localStorage.getItem('token');
  
  if (token) {
    getNotes();
  } else {
    navigate('/login');
  }
  // eslint-disable-next-line
}, []);
  const [note, setNote] = useState({ id:"",etitle: "", edescription: "", etag: "default" });
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
    props.showAlert("Updated successfully","success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <AddNote showAlert={props.showAlert}/>

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
              Edit Notes
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

      <div className="container">
        <h2 className="pt-2 pb-2">Your Notes</h2>
        <div>
        {notes.length ===0 && "There is no Note to show"}
        </div>
        <div >
        { notes.map((note,index) => {
          return (
            
            <NoteItem showAlert={props.showAlert} updateNotes={updateNotes}  key={index} note={note} />
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Notes;
