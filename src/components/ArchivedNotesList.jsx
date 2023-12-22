import React from "react";
import NoteCard from "./NoteCard";

const ArchivedNotesList = ({ notes, onDelete, onReturn }) => {
    const archivedNotes = notes.filter(note => note.archived);
    const listEmpty = archivedNotes.length === 0;

    return (
        <div className="list-note-wrapper">
            <h2>Daftar Arsip</h2>
            {listEmpty && <p className="empty-list-message">Tidak ada catatan</p>}
            <div className="list-note">{archivedNotes.map((note) => (<NoteCard {...note} key={note.id} id={note.id} onDelete={onDelete} onArchive={onReturn} actionName="Pulihkan" />))}
            </div>
        </div>
    )
}

export default ArchivedNotesList;