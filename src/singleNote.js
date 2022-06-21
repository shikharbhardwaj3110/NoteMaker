import React from "react";
import './App.css'

function SingleNote(props) {

    const alternatingColor = ['#d6d6d6', 'white']

    const divStyle = {
        textAlign: 'left',
        padding: '2.5rem',
        paddingTop: '0'
    }

    const spanStyle = {
        fontSize: '1.5rem',
        fontFamily: 'font-family: Verdana, Arial, Helvetica, sans-serif;',
        marginLeft: '1rem'
    }

    const noteDivStyle = {
        marginTop: '1rem',
        wordWrap: 'break-word',
    }

    const hrStyle = {
        marginTop: '1.2rem'
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
                    <div style={{marginTop : '0rem',wordWrap: 'break-word', backgroundColor : alternatingColor[index % alternatingColor.length] }}   key={index}>
                        <div style={{ textAlign: 'left', marginTop: '0px', marginLeft: '1rem', display: 'flex' }}>
                            <span style={{ fontSize: '0.7rem', fontFamily: 'sans-serif', color: '#6d6e6e' }}><img src="../clock.png" width="10" />&nbsp; Created at {note[1]}</span>
                        </div>
                        <span style={spanStyle} >{note[0]}</span>
                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <button type="button" class="btn btn-outline-secondary" style={{marginRight : '0.5rem'}}>Edit</button>
                            <button class="btn btn-outline-danger" onClick={() => { filterNotes(index) }}>Delete</button>
                        </div>
                        <hr style={hrStyle}></hr>
                    </div>
                )
            })}
        </div>
    )


}

export default SingleNote