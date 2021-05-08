import React from 'react';
import { NavLink } from 'react-router-dom';

NoteListNav.defaultProps = {
    folders: []
}

function NoteListNav(props) {
    return (
        <div className='NoteListNav'>
            <ul className='FolderList'>
                {props.folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink className='FolderLink'
                            to={`/folder/${folder.id}`}>{folder.name}</NavLink>
                    </li>
                    )}
            </ul>
            <button className="add-folder">Add Folder</button>
        </div>
    )
}

export default NoteListNav;