import React from "react";
import './App.css'

function SingleNote(props) {

    const divStyle = {
        textAlign: 'left',
        padding: '2.5rem',
        paddingTop : '0'
    }

    const spanStyle = {
        fontSize: '1.5rem',
        fontFamily: 'cursive'
    }

    const noteDivStyle = {
        marginTop: '1rem',
        wordWrap: 'break-word'
    }

    const hrStyle = {
        marginTop: '1rem'
    }

    const deleteButtonStyle = {
        backgroundColor: 'red',
        color: 'white',
        border: '2px solid #c91408',
        padding: '0.3rem',
        borderRadius: '5px'
    }

    function filterNotes(noteIndex) {
        console.log("Deleted index will be :", noteIndex)
        props.onChange(noteIndex)
    }


    return (
        <div style={divStyle}>
            {props.notes.map((note, index) => {
                console.log("Note ", index + 1, " : ", note[0])
                return (
                    <div style={noteDivStyle} key={index}>
                        <span style={spanStyle} >{note[0]}</span>
                        <div style={{ textAlign: 'center', marginTop: '1.7rem' }}>
                            <i><span style={{fontSize : '13px', fontFamily : 'sans-serif', color : '#6d6e6e'}}> Created at {note[1]}</span></i>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <button style={deleteButtonStyle} onClick={() => { filterNotes(index) }}>Delete</button>
                        </div>
                        <hr style={hrStyle}></hr>
                    </div>
                )
            })}
        </div>
    )


}

export default SingleNote