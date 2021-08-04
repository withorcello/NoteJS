import React from 'react'
import classNames from 'classnames';

class Note extends React.Component {
    state = {
        isEdithing: false
    }

    handleEdit = () => {
        this.setState({ isEdithing: true })
    }


    handleCancel = () => {
        this.setState({ isEdithing: false })
    }

    handleSave = () => {
        this.props.onEdit(this.props.note, this.input.value)
        this.setState({ isEdithing: false })
    }

    render() {
        const { note, onDelete, index, onMove, total, atributs } = this.props
        const { isEdithing } = this.state
        return (
            <p className="note" key={note.ordernotes}>
                {isEdithing ?
                    (<input type="text" className="note_input"
                        defaultValue={note.note}
                        ref={c => { this.input = c }}
                        onKeyPress={
                            event => {
                                if (event.key === "Enter") {
                                    console.log("Note" + total)
                                    this.handleSave(note.id)
                                }
                            }
                        }
                    ></input>) :
                    (<span className="note_text">{note.note}</span>)
                }
                {
                    atributs.forEach(element => {
                        console.log(element )
                        //<span className="note_text">{atributs}</span>
                    })
                }
                {isEdithing &&
                    <React.Fragment>
                        <button
                            className="note_button"
                            onClick={() => {
                                this.handleSave(note)
                            }}
                        >
                            <i className="material-icons">done</i>
                        </button>
                        <button
                            className="note_button"
                            onClick={() => {
                                console.log(atributs)
                                this.handleCancel()
                            }}
                        >
                            <i className="material-icons">cancel</i>
                        </button>
                    </React.Fragment>
                }
                <button
                    disabled={isEdithing}
                    className="note_button"
                    onClick={() => {
                        this.handleEdit()
                    }}
                >
                    <i className="material-icons">edit</i>
                </button>
                <button
                    disabled={isEdithing}
                    className="note_button"
                    onClick={() => {
                        onDelete(note)
                    }}
                >
                    <i className="material-icons">delete</i>
                </button>
                <button
                    className={classNames("note_button", {
                        "note_button--hidden": index === 0
                    })}
                    onClick={() => {
                        onMove("up", note)
                    }}
                >
                    <i className="material-icons">arrow_upward</i>
                </button>
                <button
                    className={classNames("note_button", {
                        "note_button--hidden":
                            index === total - 1
                    })}
                    onClick={() => {
                        onMove("down", note)
                    }}
                >
                    <i className="material-icons">arrow_downward</i>
                </button>
            </p>
        )
    }
}

export default Note
