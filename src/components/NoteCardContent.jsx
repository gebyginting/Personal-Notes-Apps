import React from "react";

const NoteContent = ({title, body, createdAt}) => {
    return (
        <div className="note-content">
            <h3>{title}</h3>
            <p className="note-content-created-date">{createdAt}</p>
            <p className="note-content-body">{body}</p>
        </div>
    );
}

export default NoteContent;