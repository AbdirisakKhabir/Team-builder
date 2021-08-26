import logo from './logo.svg';
import './App.css';
import React, {useState}  from 'react';
import Data from './Data';
import NotesForm from './Components/NotesForm';
import Notes from './Components/Notes';
function App() {
 const [myNotes, setMyNotes ] = useState(Data);

 function addNewNote(oneNote) {
  const newNote = [...myNotes, {...oneNote}]

  setMyNotes(newNote)

}
  return (
    <div className="App">
     <h1>Team Builder</h1>
     < NotesForm addNewNote ={addNewNote}/>
    <Notes  Notes= {myNotes}/>
    </div>

    
  );
}

export default App;
