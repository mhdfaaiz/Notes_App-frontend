import React from 'react'
import NotesCard from './NotesCard'

function NotesCardContainer() {
    return (
        <div className="container">
            <div className="note-has-grid row">
                <NotesCard color="green" />
                <NotesCard color="purple" />
                <NotesCard color="blue" />

                <NotesCard color="green" />
                <NotesCard color="purple" />
                <NotesCard color="blue" />

                <NotesCard color="green" />
                <NotesCard color="purple" />
                <NotesCard color="blue" />

            </div>
        </div>
    )
}

export default NotesCardContainer
