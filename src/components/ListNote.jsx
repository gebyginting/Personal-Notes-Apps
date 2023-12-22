import React from "react";
import NoteCard from "./NoteCard";

const ListNote = ({ notes, onDelete, onArchive }) => {
    const activeNotes = notes.filter(note => !note.archived);
    const listEmpty = activeNotes.length === 0;

    return (
        <div className="list-note-wrapper">
            <h2>Daftar Catatan</h2>
            {listEmpty && <p className="empty-list-message">Tidak ada catatan</p>}
            <div className="list-note">
                {activeNotes.map((note) => (<NoteCard {...note} key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} actionName="Arsipkan"/>))}
            </div>
        </div>
    )
}

export default ListNote;