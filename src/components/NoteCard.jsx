import React from "react";
import NoteContent from "./NoteCardContent";
import NoteCardActionButton from "./NoteCardActionButton";

const NoteCard = ({ title, body, createdAt, id, onDelete, onArchive, actionName }) => {
    return (
        <div className="note-card">
            <NoteContent title={title} body={body} createdAt={ createdAt}/>
            <NoteCardActionButton id={id} onDelete={onDelete} onArchive={onArchive} actionName={actionName}/>
        </div>
    );
}

export default NoteCard;
