import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';


class NoteListNav extends Component {
    static contextType = NotefulContext;
    render() {
        const folders = this.context.folders
        
    return (
        <div className='NoteListNav'>
            <ul className='FolderList'>
                {folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink className='FolderLink'
                            to={`/folder/${folder.id}`}>{folder.folder_name}</NavLink>
                    </li>
                    )}
            </ul>
            <Link to='/add-folder'><button className="add-folder">Add Folder</button></Link><br></br>
            <Link to='/add-note'><button className="note-add-button">Add Note</button></Link>
        </div>
    )
}}

export default NoteListNav;

NoteListNav.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    }))
}