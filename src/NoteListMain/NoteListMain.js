import React, {Component} from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import { folderNotes } from '../find-functions';


class NoteListMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NotefulContext;

    render() {
        const folder = this.props.match.params
        const notes = this.context.notes
        let displayNotes = folderNotes(notes, folder.folderId);
    return (
        <section className='NoteListMain'>
            <ul>
                {displayNotes.map(note =>
                    <li key={note.id}>
                        <Note
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />
                    </li>
                )}
            </ul>
        </section>
    )
}}

export default NoteListMain;