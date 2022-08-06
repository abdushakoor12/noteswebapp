import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { TextField } from "./components/TextField"

type Note = {
  content: string;
  timestamp: number;
}

function App() {

  const [notes, setNotes] = useLocalStorage("notes", [] as Note[]);

  const [noteValue, setNoteValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // filter everytime search changes
  const filteredNotes = notes.filter(note => {
    return note.content.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Notes Web App</h1>
      </div>
      <TextField label={"Note"} value={noteValue} onChange={function (value: string): void {
        setNoteValue(value);
      }} type={"name"} placeholder={"Add Note"} onSubmit={() => {
        if(noteValue !== ''){
          let note = {
            content: noteValue,
            timestamp: Date.now()
          }
  
          let oldNotes = notes;
          notes.push(note);
          setNotes(oldNotes);

          setNoteValue('')
        }
      }} />

      <div className="div d-flex justify-content-end">
        <TextField value={searchValue} onChange={function (value: string): void {
          setSearchValue(value);
        } } placeholder={"Search..."}/>
      </div>

      <div className="list-group">
        {filteredNotes.map((note, index) => {
          return (
            <div className="list-group-item" key={index}>
              {note.content}
              </div>
          )
        }
        )}
        </div>

    </div>
  )
}

export default App
