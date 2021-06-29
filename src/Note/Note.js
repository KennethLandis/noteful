import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

class Note extends Component {

    deleteNote(noteId, handleDeleteNote) {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/notes/${noteId}`, {
            method: `DELETE`
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            }
            return response
        })
        .then(data => {
            handleDeleteNote(noteId);
            this.props.onDeleteNote(noteId);
        })
        .catch(error => {
            console.error(error)
        })
    }
    render() {
        const { name, id, modified } = this.props
        const date1 = new Date(modified).toDateString();
    return (
        <NotefulContext.Consumer>
            {(context) => (
        <div className="Note">
            <h2><Link className="Note-name" to={`/note/${id}`}>{name}</Link></h2>
            <div className='Note-date'>
                <div className='Note-date-modified'>
                    Last Modified: {'  '} {date1}
                </div>
            </div>
            <button className='Note_delete' type='button'
                onClick={() => {
                    this.deleteNote(id, context.handleDeleteNote);
                }}
            >Delete Note</button>
        </div>
        )}
        </NotefulContext.Consumer>
    
    )
}}

export default Note;

Note.propTypes = {
    id: PropTypes.number,
    modified: PropTypes.string,
    name: PropTypes.string,
    history: PropTypes.object
}