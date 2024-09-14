import React from 'react'
import NotesCard from './NotesCard'

function NotesCardContainer({ notes }) {
    return (
        <div className="container">
            <div className="note-has-grid row">
                {notes.map(note => <NotesCard key={note.id} note={note} />)}
            </div>
        </div>
    )
}

export default NotesCardContainer
