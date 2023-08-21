import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000/";
  const staticNotes = [];
  const [notes, setNotes] = useState(staticNotes);
    
// Get all notes
  const getNotes = async () => {

    // API call 
    
     const response = await fetch(`${host}notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZTZjNTNiZTc5NGQ0Y2E0MWViNTUwIn0sImlhdCI6MTY5MjMwMDE1Mn0.KLngvQR68eurC2n_y0-H7t36ySwmOOc1ghBqNkQT-Rg",
      },
      
    }); 
    const json = await response.json();

     setNotes(json);
   
  };
  // Add a Note
  const addNotes = async (title, description, tag) => {

    // API call 
    
     const response =  await fetch(`${host}notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZTZjNTNiZTc5NGQ0Y2E0MWViNTUwIn0sImlhdCI6MTY5MjMwMDE1Mn0.KLngvQR68eurC2n_y0-H7t36ySwmOOc1ghBqNkQT-Rg",
      },
      body: JSON.stringify({title,description,tag}),
    }); 

    
    
    const note = await response.json();
   
    setNotes(notes.concat(note));
    
    
  };
  
  // Edit the Note
  const editNotes = async (id,title, description, tag) => {
    // API CALL
    await fetch(`${host}notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZTZjNTNiZTc5NGQ0Y2E0MWViNTUwIn0sImlhdCI6MTY5MjMwMDE1Mn0.KLngvQR68eurC2n_y0-H7t36ySwmOOc1ghBqNkQT-Rg",
      },
      body: JSON.stringify({title,description,tag}),
    });
    // const json = response.json();
    let newNotes =JSON.parse( JSON.stringify(notes));

    for (let i = 0; i < newNotes.length; i++) {
      if (newNotes[i]._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
        
      }
      

    }
    setNotes(newNotes);
  };

  // Dete a note
  const deleteNotes = async(id) => {
    // API Call
     fetch(`${host}notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZTZjNTNiZTc5NGQ0Y2E0MWViNTUwIn0sImlhdCI6MTY5MjMwMDE1Mn0.KLngvQR68eurC2n_y0-H7t36ySwmOOc1ghBqNkQT-Rg",
      },
     
    });
  

    // logic
    
    const newNotes =  notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNotes, editNotes, deleteNotes,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
