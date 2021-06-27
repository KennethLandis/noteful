import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import NoteListNav from './NoteListNav/NoteListNav';
import NotePageNav from './NotePageNav/NotePageNav';
import NoteListMain from './NoteListMain/NoteListMain';
import NotePageMain from './NotePageMain/NotePageMain';
import NotefulContext from './NotefulContext';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote'; 
import NotefulError from './NotefulError';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:8000/folders`),
      fetch(`http://localhost:8000/notes`)
  ])
    .then(([Res1, Res2]) => {
      if (!Res1.ok)
        return Res1.json().then(e => Promise.reject(e))
      if (!Res2.ok)
        return Res2.json().then(e => Promise.reject(e));
      return Promise.all([Res1.json(), Res2.json()]);
    })
    .then(([folders1, notes1]) => this.setState({
      folders: folders1, 
      notes: notes1}))
    
  };

  handleDeleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId
      )
    this.setState({
      notes: newNotes
    })
  }

  addFolder = newFolder => {
    const newFolders = this.state.folders
    newFolders.push(newFolder)
    this.setState({
      folders: newFolders
    })
  }

  addNote = newNote => {
    const newNotes = this.state.notes
    newNotes.push(newNote)
    this.setState({
      notes: newNotes
    })
  }

  renderNavRoutes() {
    return (
      <>
      <NotefulError>
          {['/', '/folder/:folderId', '/add-folder', '/add-note'].map(path => (
              <Route
                  exact
                  key={path}
                  path={path}
                  component={NoteListNav}
              />
          ))}
          <Route
              path="/note/:noteId"
              component={NotePageNav}
          />
          </NotefulError>
        </>
    )
  }

  renderMainRoutes() {
    return (
        <>
        <NotefulError>
            {['/', '/folder/:folderId'].map(path => (
                <Route
                    exact
                    key={path}
                    path={path}
                    component={NoteListMain}
                />
            ))}
            <Route
                path="/note/:noteId"
                component={NotePageMain}
            />
            <Route path="/add-folder" component={AddFolder} />
            <Route path="/add-note" component={AddNote} />
            </NotefulError>
        </>
    );
}

  render () {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      handleDeleteNote: this.handleDeleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote
    }

  return (
    <NotefulContext.Provider value={contextValue}>
    <div className="App">
      <nav className='App-nav'>{this.renderNavRoutes()}</nav>
      <header className="App-header">
        <h1><Link to="/">Noteful</Link></h1>
      </header>
      <main className='App-main'>{this.renderMainRoutes()}</main>
    </div>
    </NotefulContext.Provider>
  );
}}

export default App;
