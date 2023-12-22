import React from "react";
import AddNote from "./AddNote";
import ListNote from "./ListNote";
import ArchivedNotesList from "./ArchivedNotesList";
import SearchBar from "./SearchFeature";

const MainContent = ({ addNote, notes, onDelete, onArchive, onReturn }) => {
    return (
        <main>
            <SearchBar />
            <AddNote addNote={addNote} />
            <ListNote notes={notes} onDelete={onDelete} onArchive={onArchive} />    
            <ArchivedNotesList notes={notes} onDelete={onDelete} onReturn={onReturn} />
        </main>
    );
}

export default MainContent;