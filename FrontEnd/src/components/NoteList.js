import React from 'react'

import Note from './Note'

const NoteList = ({ notes, onMove, onDelete, onEdit, form, atributs }) => (
    <div className="note-list">
        {notes.map((note) =>
            <Note
                atributs={atributs = note.id ? test:null}
                form={form}
                key={note.id}
                note={note}
                onEdit={onEdit}
                onDelete={onDelete}
                index={note.ordernotes}
                onMove={onMove}
                total={notes.length}
            />

        )}
    </div>
)

export default NoteList