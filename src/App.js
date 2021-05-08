import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import NoteListNav from './NoteListNav/NoteListNav';
import Store from './Store';
import { findNote, findFolder, folderNotes } from './find-functions'
import NotePageNav from './NotePageNav/NotePageNav';
import NoteListMain from './NoteListMain/NoteListMain';
import NotePageMain from './NotePageMain/NotePageMain';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    this.setState({
      notes: Store.notes,
      folders: Store.folders
    })
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
    

  return (
    <div className="App">
      <nav className='App-nav'>{this.renderNavRoutes()}</nav>
      <header className="App-header">
        <h1><Link to="/">Noteful</Link></h1>
      </header>
      <main className='App-main'>{this.renderMainRoutes()}</main>
    </div>
  );
}}

export default App;
