import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props)=>{

   const staticNotes =  [
        {
          "_id": "64dea45ebb86950b4a3db6f1",
          "user": "64de6c53be794d4ca41eb550",
          "title": "Now go and watch some youtube video",
          "description": "Don't watch too much time okay",
          "tag": "gaming",
          "date": "2023-08-17T22:51:10.724Z",
          "__v": 0
        },
        {
            "_id": "64dea45ebb86950b4a3db6f2",
            "user": "64de6c53be794d4ca41eb550",
            "title": "Now go and Study something and upskills your skill",
            "description": "Don't watch too much time okay, do practical things",
            "tag": "gaming",
            "date": "2023-08-17T22:51:10.724Z",
            "__v": 0
          },
          {
            "_id": "64dea45ebb86950b4a3db6f3",
            "user": "64de6c53be794d4ca41eb550",
            "title": "Now go and watch some youtube video",
            "description": "Don't watch too much time okay",
            "tag": "gaming",
            "date": "2023-08-17T22:51:10.724Z",
            "__v": 0
          },
          {
              "_id": "64dea45ebb86950b4a3db6f4",
              "user": "64de6c53be794d4ca41eb550",
              "title": "Now go and Study something and upskills your skill",
              "description": "Don't watch too much time okay, do practical things",
              "tag": "gaming",
              "date": "2023-08-17T22:51:10.724Z",
              "__v": 0
            },
            {
              "_id": "64dea45ebb86950b4a3db6f5",
              "user": "64de6c53be794d4ca41eb550",
              "title": "Now go and watch some youtube video",
              "description": "Don't watch too much time okay",
              "tag": "gaming",
              "date": "2023-08-17T22:51:10.724Z",
              "__v": 0
            },
            {
                "_id": "64dea45ebb86950b4a3db6f6",
                "user": "64de6c53be794d4ca41eb550",
                "title": "Now go and Study something and upskills your skill",
                "description": "Don't watch too much time okay, do practical things",
                "tag": "gaming",
                "date": "2023-08-17T22:51:10.724Z",
                "__v": 0
              }
      ]

    const [notes, setNotes] = useState(staticNotes)


    // Add a Note
    console.log("Adding new notes");
    const addNotes =(title,description,tag)=> {
       const note =  {
        "_id": "64dea45ebb86950b4a3db6f7",
        "user": "64de6c53be794d4ca41eb550",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-08-17T22:51:10.724Z",
        "__v": 0
      }
       setNotes(notes.concat(note));
    }

    const editNotes = (title,description,tag)=>{
      const note =  {
        "_id": "64dea45ebb86950b4a3db6f7",
        "user": "64de6c53be794d4ca41eb550",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-08-17T22:51:10.724Z",
        "__v": 0
      }
       setNotes(notes.concat(note));
    }

   return(
    <NoteContext.Provider  value={{notes,addNotes,editNotes}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;