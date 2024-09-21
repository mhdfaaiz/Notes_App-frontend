import React from 'react'
import Filter from '../components/Filter'
import NotesCardContainer from '../components/NotesCardContainer'

const HomePage = ({ notes, handleFilterText, searchText }) => {
    return (
        <div>
            {searchText.length > 0 && notes.length < 1 ? <h3 style={{ color: 'red', textAlign: 'center' }}>Sorry! No notes found</h3> : <Filter handleFilterText={handleFilterText} />}
            {notes.length === 0 ? <h3 style={{ textAlign: 'center', color: 'blue' }}>No notes available! Start Adding some notes.</h3> : <NotesCardContainer notes={notes} />}
        </div>
    )
}

export default HomePage
