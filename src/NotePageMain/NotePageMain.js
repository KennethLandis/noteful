import React, { Component } from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import { findNote } from '../find-functions';
import PropTypes from 'prop-types';



class NotePageMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NotefulContext;

    handleDeleteNote = noteId => {
        this.props.history.push('/')
    };

    render() {
        const { notes } = this.context
        const { noteId } = this.props.match.params
        const targetNote = findNote(notes, noteId) || { content: '' }
        
    return (
        <section className='NotePageMain'>
            <Note
                id={targetNote.id}
                name={targetNote.name}
                modified={targetNote.modified}
                onDeleteNote={this.handleDeleteNote}
            />
            <div className='NotePageMain-Content'>
                {targetNote.content.split(/\n \r|\r/).map((para, i) =>
                    <p key={i}>{para}</p>
                )}
            </div>
        </section>
    )
}}

export default NotePageMain;

NotePageMain.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        modified: PropTypes.string,
        folderId: PropTypes.string,
        content: PropTypes.string
    })),
    noteId: PropTypes.object,
    onDeleteNote: PropTypes.func
}