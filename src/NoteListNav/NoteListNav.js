import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';



class NoteListNav extends Component {
    static contextType = NotefulContext;
    render() {
        const folders = this.context.folders
        const notes = this.context.notes
    return (
        <div className='NoteListNav'>
            <ul className='FolderList'>
                {folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink className='FolderLink'
                            to={`/folder/${folder.id}`}>{folder.name}</NavLink>
                    </li>
                    )}
            </ul>
            <button className="add-folder">Add Folder</button>
        </div>
    )
}}

export default NoteListNav;