import React, { Fragment } from 'react'
import NoteList from '../components/NoteList'
import NewNote from '../components/NewNote'
import Error from '../components/Error'
import FormDynamic from '../components/FormDynamic'
import Table from '../components/testeTable'

const Notes = ({ reloadHasError, onAddNote, notes, onDelete, onMove, onEdit, onRetry, form, atributs }) => {
    if (reloadHasError) {
        return <Error onRetry={onRetry} />
    }
    return (
        <Fragment>
            <NewNote total={notes.length} />
            {form.map((forms) =>
                <FormDynamic key={forms.id} form={forms} />
            )}
            <div className="new-note_div">
                <button className="new-note_button"
                    onClick={
                        () => {
                            onAddNote(form.length)
                        }
                    }
                >Adicionar</button>
            </div>
            {//<Table notes={notes} atrib={atributs} />}
            <NoteList
                atributs={atributs}
                form={form}
                notes={notes}
                onMove={onMove}
                onDelete={onDelete}
                onEdit={onEdit}
            />
}
        </Fragment>
    )
}

export default Notes