import React, { Component } from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import { findNote } from '../find-functions';



class NotePageMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NotefulContext;

    render() {
        const notes = this.context.notes;
        const noteId = this.props.match.params
        const targetNote = findNote(notes, noteId.noteId)
        console.log(notes, noteId, targetNote);
    return (
        <section className='NotePageMain'>
            <Note
                id={targetNote.id}
                name={targetNote.name}
                modified={targetNote.modified}
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