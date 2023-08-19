import NoteContext from "../context/notes/NoteContext";
import { useContext } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
function Notes() {
    const context = useContext(NoteContext);
    const {notes,setNotes} = context;
  return (
    <div>
      <AddNote/>
        <div className="row my-3" >
      <h2>Your Notes</h2>
      {
        notes.map((note)=>{
            return <NoteItem key={note._id} note={note}/>
        })

      }
      </div>
    </div>
  )
}

export default Notes
