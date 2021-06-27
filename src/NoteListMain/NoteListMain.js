import React, {Component} from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import { folderNotes } from '../find-functions';
import PropTypes from 'prop-types';


class NoteListMain extends Component {
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
        const folder = this.props.match.params
        const notes = this.context.notes
        const displayNotes = folderNotes(notes, folder.folderId);
    return (
        <section className='NoteListMain'>
            <ul>
                {displayNotes.map(note =>
                    <li key={note.id}>
                        <Note
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                            onDeleteNote={this.handleDeleteNote}
                        />
                    </li>
                )}
            </ul>
        </section>
    )
}}

export default NoteListMain;

NoteListMain.propTypes = {
    folder: PropTypes.object,
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        modified: PropTypes.string,
        folderId: PropTypes.string,
        content: PropTypes.string
    })),
    displayNotes: PropTypes.func,
    deleteNote: PropTypes.func
}