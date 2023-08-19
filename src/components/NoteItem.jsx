import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import "./style/NoteItem.css";


function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-sm" style={{minWidth:"50%"}}>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description}
          </p>
           <p><span className="badge bg-success">
            {note.tag}</span></p>
          <p className="card-text">
            {note.date}
          </p>
          <div className="d-flex justify-content-between test">
            <div className="icon_cursor">
          <FontAwesomeIcon className="text-danger" icon={faTrash} size="xl" />
          </div>
          <div className="icon_cursor">
          <FontAwesomeIcon className="text-warning"  icon={faPenToSquare}  size='xl' />
           </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default NoteItem;
