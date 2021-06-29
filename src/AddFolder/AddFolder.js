import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

class AddFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            }
        }
    }
    static contextType = NotefulContext;

    updateName(name) {
        this.setState({name: { value: name, touched: true}})
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return "Name is required";
        } else if (name.length > 12) {
            return "Name must be under 13 characters"
        }
    }

    addFolder(folderName, addFolder) {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/folders`, {
            method: `POST`,
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({ folder_name: `${folderName}`})
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
            addFolder(data)
        })
        .catch(error => {
            console.error(error)
        })
    } 



    handleSubmit(e) {
        e.preventDefault();
        const folderName = this.state.name.value;
        this.addFolder(folderName, this.context.addFolder)
    }

    render() {
        const nameError = this.validateName();
        return(
            <form className="new-folder" onSubmit={e => this.handleSubmit(e)}>
                <h2>Add New Folder</h2>
                <div className="folder-hint"></div>
                <div className="form-group">
                    <label htmlFor="folder-name">Folder Name: </label>
                    <input
                        type="text"
                        className="folder-control"
                        name="folder-name"
                        id="folder-name"
                        onChange={e => this.updateName(e.target.value)}/>
                        {this.state.name.touched && ( <ValidationError message={nameError} />)}
                    <button type="reset">Reset</button>
                    <button
                        type="submit"
                        className="folder-submit"
                        disabled={this.validateName()}
                    >Submit</button>
                </div>

            </form>
        )
    }
}

export default AddFolder;

AddFolder.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    touched: PropTypes.bool,
    addFolder: PropTypes.func,
}