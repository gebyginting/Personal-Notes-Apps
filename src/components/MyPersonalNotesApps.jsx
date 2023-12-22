import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import { getInitialData, showFormattedDate } from "../utils";

const formattedDummyNotesDate = (notes) => {
    return notes.map((note) => {
        const formattedDate = showFormattedDate(note.createdAt);
        return {
            ...note,
            createdAt: formattedDate
        };
    });
};

class MyPersonalNotesApps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: formattedDummyNotesDate(getInitialData()),
            searchValue: "",
        };
    }

    onAddNoteController = ({ title, body }) => {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: showFormattedDate(new Date())
                    }
                ]
            };
        });
    }

    onDeleteNoteHandler = (id) => {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.filter((note) => note.id !== id);
            return {
                notes: updatedNotes,
            };
        });
    }

    onNoteStatusHandler = (id, update) => {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map((note) => {
                return note.id === id ? { ...note, ...update } : note;
            });

            return {
                notes: updatedNotes,
            };
        });
    }

    onArchivedNoteHandler = (id) => {
        this.onNoteStatusHandler(id, { archived: true });
    }

    onReturnNoteHandler = (id) => {
        this.onNoteStatusHandler(id, { archived: false });
    }

    searchNotes(value) {
        return this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(value.toLowerCase())
        );
    }

    onSearchHandler = (value) => {
        this.setState({ searchValue: value });
    }

    onShowSearchResultHandler() {
        const { searchValue, notes } = this.state;
        return searchValue ? this.searchNotes(searchValue) : notes;
    }

    render() {
        const listNotes = this.onShowSearchResultHandler();

        return (
            <>
                <Header onSearch={this.onSearchHandler} />
                <MainContent
                    notes={listNotes}
                    addNote={this.onAddNoteController}
                    onDelete={this.onDeleteNoteHandler}
                    onArchive={this.onArchivedNoteHandler}
                    onReturn={this.onReturnNoteHandler}
                />
            </>
        );
    }
}

export default MyPersonalNotesApps;
