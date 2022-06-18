import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import SingleNote from './singleNote';

const divStyle = {
    backgroundColor: 'white',
    minHeight: 'calc(100vh - 6rem)',
    textAlign: 'center',
    marginTop: '2rem'
};

const buttonStyle = {
    minHeight: '2.5rem',
    borderRadius: '10px',
    border: '2px solid rgb(50, 222, 132)',
    color: 'black',
    padding: '1rem 1rem 1rem 1rem',
}

const inputStyle = {
    marginTop: '1.5rem',
    minWidth: '22%',
    height: '1.7rem',
    paddingLeft: '0.3rem'
}

const submitButtonStyle = {
    marginLeft: '1rem',
    minHeight: '2rem',
    border: '1px solid rgb(50, 222, 132)',
    borderRadius: '7px',
    padding: '0.5rem'
}

const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);

function AllNotes() {

    const [noteInput, setNoteInput] = useState(0)
    const [notes, setNotes] = useState([])
    const [time, setTime] = useState([])
    const [note, setNote] = useState("")

    const onNoteChange = (event) => {
        event.preventDefault();
        setNote(event.target.value);
    };

    function noteInputStatus() {
        setNoteInput(1)
    }

    function addNote() {
        setNote("")
        let all_notes = notes
        let all_time = time
        all_time.push(new Date().toLocaleString())
        setTime([...all_time])
        all_notes.push(note)
        setNotes([...notes])
        //console.log(zip(notes,time))
    }

    function deleteNotes(delete_note) {
        let new_notes = notes.filter((element, index) => {
            return index !== delete_note
        })

        let new_time = time.filter((element, index)=> {
            return index !== delete_note
        })
        setTime([...new_time])
        setNotes([...new_notes])
    }

    //console.log(notes)
    return (
        <div style={divStyle}>
            <div>
                <button style={buttonStyle} onClick={() => { noteInputStatus() }}>Add a Note</button>
                <br></br>
                {noteInput === 1 ? <input style={inputStyle} value={note} onChange={onNoteChange} placeholder="Your note here ..." id="note_input"></input> : ""}
                {noteInput === 1 ? <button style={submitButtonStyle} onClick={() => { addNote() }}>Submit</button> : ""}
            </div>
            <hr style={{margin : '2.5rem', marginBottom : '0'}}></hr>
            {notes.length===0 ? <div style={{paddingTop : '2rem'}}><i><span >No notes to display</span></i></div> : ""}
            <SingleNote notes={zip(notes,time)} onChange={deleteNotes}></SingleNote>
        </div>
    )
}

export default AllNotes;