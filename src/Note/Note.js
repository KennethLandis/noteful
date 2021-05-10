import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

function Note(props) {


    function deleteNote(noteId, deleteNote) {
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: `DELETE`
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            }
            return response.json()
        })
        .then(data => {
            deleteNote(noteId)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <NotefulContext.Consumer>
            {(context) => (
        <div className="Note">
            <h2><Link className="Note-name" to={`/note/${props.id}`}>{props.name}</Link></h2>
            <div className='Note-date'>
                <div className='Note-date-modified'>
                    {props.modified}
                </div>
            </div>
            <button className='Note_delete' type='button'
                onClick={() => {
                    deleteNote(props.id, context.deleteNote)
                }}
            >Delete Note</button>
        </div>
        )}
        </NotefulContext.Consumer>
    
    )
}

export default Note;

Note.propTypes = {
    id: PropTypes.string,
    modified: PropTypes.string,
    name: PropTypes.string
}