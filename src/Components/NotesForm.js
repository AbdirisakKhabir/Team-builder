import React, {useState} from 'react';

const NotesForm = (props) => {
    // this component expects "addNewNote" function as a prop from app.js
  
  // Create state for the form
    const [noteForm, setNoteForm] = useState({
        id:Date.now(),
        name:"",
        email:"",
        role:"",
        
    })

    // create function keeps track of what you type and sends it to the state
    function handleChange(event) {
       
        let newData = {...noteForm, [event.target.name]: event.target.value}

        setNoteForm(newData)
        console.log(noteForm)
    }
    
      // Create a function that submits your form to "addNewNote" function
  function handleSubmit(event) {
      
    event.preventDefault()
    
    props.addNewNote(noteForm)
     

  }

    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
                <label>Name </label>
                <input type="text" placeholder="Enter Your Name"
                name="name" 
                value = {noteForm.name}
                onChange={handleChange} />
                <label>Email </label>
                <input type="email" placeholder="Enter Your Email" 
                name="email" 
                value = {noteForm.email} 
                onChange={handleChange} />
                <label>Role </label>
                <input type="text" placeholder="Enter Your Role"
                name="role" 
                value = {noteForm.role}
                onChange={handleChange} />
                <button type="submit">Add Note</button>
            </form>
            </div>
       
    )
}

export default NotesForm;