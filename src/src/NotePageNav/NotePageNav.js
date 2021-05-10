import React from 'react';
import PropTypes from 'prop-types';

NotePageNav.defaultProps = {
    history: {
        goBack:() => {}
    }
}

function NotePageNav(props) {
    return (
        <div className='NotePageNav'>
            
            {props.folder && (
                <h3 className="folder_name">
                    {props.folder.name}
                </h3>
            )}
            <button tag='button' role='link' onClick={() => props.history.goBack()}>Go back</button>
        </div>
    )
}

export default NotePageNav;

NotePageNav.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }))
}