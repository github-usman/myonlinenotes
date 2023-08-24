import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./style/NoteItem.css";
import NoteContext from "../context/notes/NoteContext";
import { useContext } from "react";

function NoteItem(props) {
  const context = useContext(NoteContext);
  const { deleteNotes } = context;
  const { note, updateNotes } = props;

  // Function to parse and format description
  const formatDescription = (description) => {
    let formattedText = description;

    // Highlight text enclosed by ***
    formattedText = formattedText.replace(/\*\*\*(.*?)\*\*\*/g, '<span style="background-color: #f8ff00;color:black;">$1</span>');

    // Bold text enclosed by %% 
    
    formattedText = formattedText.replace(/%%(.*?)%%/g, '<strong>$1</strong>');


    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <div className="col-sm mb-3 "  >
      <div className="card mt-2 card_body">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <pre className="card-text">
            {formatDescription(note.description)}
          </pre>
          <p>
            <span className="badge bg-success">{note.tag}</span>
          </p>
          <p className="card-text"> {new Date(note.date).toString()} </p>
          <div className="d-flex justify-content-between test">
            <div className="icon_cursor">
              <FontAwesomeIcon
                className="text-danger"
                onClick={() => {
                  deleteNotes(note._id);
                  props.showAlert("Deleted successfully","success")
                }}
                icon={faTrash}
                size="xl"
              />
            </div>
            <div className="icon_cursor">
              <FontAwesomeIcon
                className="text-warning"
                onClick={() => {
                  updateNotes(note);
                  
                }}
                icon={faPenToSquare}
                size="xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
