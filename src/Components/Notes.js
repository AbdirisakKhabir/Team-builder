import React from 'react';

const Notes = (props) => {


    return (
        <div className="noteList" >

            {props.Notes.map((note) => (
                <div className="note">
            <h3>Name : {note.name}</h3>
            <h3>Email : {note.email} </h3>
            <h3>Role : {note.role} </h3>
            </div>
            ))}
        </div>
    )
}

export default Notes;