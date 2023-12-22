import React from "react";
import InputNewNote from "./InputNewNote";

const AddNote = ({ addNote }) => {
    return (
        <div className="add-note-wrapper">
            <h2>Buat catatan baru</h2>
            <InputNewNote addNote={addNote} />
        </div>
    );
}

export default AddNote;