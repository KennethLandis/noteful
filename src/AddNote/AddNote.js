import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError'
import PropTypes from 'prop-types';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            }
        }
    }

    addNote(note, addNote) {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/notes`, {
            method: `POST`,
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify( note )
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            addNote(data)
            this.props.history.push(`./folder/${data.folder_id}`)
        })
        .catch(error => {
            console.error(error)
        })
    } 

    updateName(name) {
        this.setState({ name: { value: name, touched: true}})
    }

    updateContent(content) {
        this.setState({ content: { value: content, touched: true}})
    }

    handleSubmit(e) {
        e.preventDefault();
        const newNote = {
            note_name: e.target['name'].value,
            content: e.target['content'].value,
            folder_id: e.target['folders'].value,
            modified: new Date()
        }
        this.addNote(newNote, this.context.addNote)
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return "Name is required";
        } 
    }

    validateContent() {
        const content = this.state.content.value.trim();
        if (content.length === 0) {
            return "Content is required";
        }
    }

    static contextType = NotefulContext

    render() {
        const nameError = this.validateName();
        const contentError = this.validateContent();
        const folders = this.context.folders;
        return (
            <form className="add-note" onSubmit={e => this.handleSubmit(e)}>
                <h2>Add Note</h2>
                <div className='addnote-hint'></div>
                <div className="form group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" onChange={e => this.updateName(e.target.value)}></input>
                    {this.state.name.touched && ( <ValidationError message={nameError} />)}<br/>
                    <label htmlFor="content">Content: </label>
                    <input className="note-content" type="text" name="content" onChange={e => this.updateContent(e.target.value)}></input>
                    {this.state.content.touched && ( <ValidationError message={contentError} />)}<br/>
                    <label htmlFor="folders">Select A folder: </label>
                    <select
                        name="folders"
                        id="folders"
                    >{folders.map(folder => (
                        <option key={folder.id} name={folder.id} value={folder.id}>{folder.folder_name}</option>))}
                    </select>
                </div>
                <button type="submit" disabled={this.validateContent() || this.validateName()}>Submit</button>
            </form>
        )
    }
}

export default AddNote;

AddNote.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    touched: PropTypes.bool,
    addNote: PropTypes.func,
    folders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    }))
}