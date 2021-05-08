import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import NoteListNav from './NoteListNav/NoteListNav';
import Store from './Store';
import { findNote, findFolder, folderNotes } from './find-functions'
import NotePageNav from './NotePageNav/NotePageNav';
import NoteListMain from './NoteListMain/NoteListMain';
import NotePageMain from './NotePageMain/NotePageMain';
import NotefulContext from './NotefulContext';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:9090/folders`),
      fetch(`http://localhost:9090/notes`)
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

  renderNavRoutes() {
    const notes = this.state.notes
    const folders = this.state.folders 

    return (
      <>
          {['/', '/folder/:folderId'].map(path => (
              <Route
                  exact
                  key={path}
                  path={path}
                  render={routeProps => (
                      <NoteListNav
                          folders={folders}
                          notes={notes}
                          {...routeProps}
                      />
                  )}
              />
          ))}
          <Route
              path="/note/:noteId"
              render={routeProps => {
                  const {noteId} = routeProps.match.params;
                  const note = findNote(notes, noteId) || {};
                  const folder = findFolder(folders, note.folderId);
                  return <NotePageNav {...routeProps} folder={folder} />;
              }}
          />
        </>
    )
  }

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
        <>
            {['/', '/folder/:folderId'].map(path => (
                <Route
                    exact
                    key={path}
                    path={path}
                    render={routeProps => {
                        const {folderId} = routeProps.match.params;
                        const notesForFolder = folderNotes(
                            notes,
                            folderId
                        );
                        return (
                            <NoteListMain
                                {...routeProps}
                                notes={notesForFolder}
                            />
                        );
                    }}
                />
            ))}
            <Route
                path="/note/:noteId"
                render={routeProps => {
                    const {noteId} = routeProps.match.params;
                    const note = findNote(notes, noteId);
                    return <NotePageMain {...routeProps} note={note} />;
                }}
            />
        </>
    );
}

  render () {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.folders
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
