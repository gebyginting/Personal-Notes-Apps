import React from "react";

const NoteCardActionButton = ({ id, onDelete, onArchive, actionName }) => {
    return (
        <div className="action-button">
            <button className="action-button-archived" onClick={() => onArchive(id)}>{actionName}</button>
            <button className="action-button-delete" onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default NoteCardActionButton;