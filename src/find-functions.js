export const findFolder = (folders, folderId) =>
    // eslint-disable-next-line
    folders.find(folder => folder.id == folderId)

export const findNote = (notes, noteId) =>
    // eslint-disable-next-line
    notes.find(note => note.id == noteId)

export const folderNotes = (notes, folderId) => (
    // eslint-disable-next-line
    (!folderId) ? notes : notes.filter(note => note.folder_id == folderId))

export const countNotesForFolder = (notes, folderId) =>
    // eslint-disable-next-line
    notes.filter(note => note.folderId == folderId).length