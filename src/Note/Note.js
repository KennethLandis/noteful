import React from 'react';
import { Link } from 'react-router-dom';

function Note(props) {
    return (
        <div className="Note">
            <h2><Link className="Note-name" to={`/note/${props.id}`}>{props.name}</Link></h2>
            <div className='Note-date'>
                <div className='Note-date-modified'>
                    {props.modified}
                </div>
            </div>
            <button className='Note_delete' type='button'>Delete Note</button>
        </div>
    )
}

export default Note;