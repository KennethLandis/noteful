import React from 'react';
import Note from '../Note/Note';

NotePageMain.defaultProps = {
    note: {
        content: '',
    }
}

function NotePageMain(props) {
    return (
        <section className='NotePageMain'>
            <Note
                id={props.note.id}
                name={props.note.name}
                modified={props.note.modified}
            />
            <div className='NotePageMain-Content'>
                {props.note.content.split(/\n \r|\r/).map((para, i) =>
                    <p key={i}>{para}</p>
                )}
            </div>
        </section>
    )
}

export default NotePageMain;