import React from "react";

class InputNewNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxLengthTitle: 50,
            remainingTitleChars: 50,
        }
    }

    onTitleEventHandler = (event) => {
        const inputTitle = event.target.value;
        const { maxLengthTitle } = this.state;

        if (inputTitle.length <= maxLengthTitle) {
            this.setState({
                title: inputTitle,
                remainingTitleChars: maxLengthTitle - inputTitle.length,
            });
        }
    }

    onBodyEventHandler = (event) => {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onAddNote = (event) => {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="add-note-form" onSubmit={this.onAddNote}>
                <div className="input-title-wrapper">
                <input
                        type="text"
                        className="input-note-title"
                        placeholder="Judul catatan ..."
                        required
                        value={this.state.title}
                        onChange={this.onTitleEventHandler}
                    />
                    <p className="limit-char">sisa karakter: {this.state.remainingTitleChars}</p>
                </div>
                <textarea name="input-note-body" id="input-note-body" cols="30" rows="10" placeholder="Tulis catatanmu di sini ..." required value={this.state.body} onChange={this.onBodyEventHandler}></textarea>
                <button type="submit" className="button-add-note">Tambah Catatan</button>
            </form>
        );
    }
}

export default InputNewNote;