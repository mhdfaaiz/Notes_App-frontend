import React from 'react'
import Filter from '../components/Filter'
import NotesCardContainer from '../components/NotesCardContainer'

const HomePage = ({ notes, handleFilterText, searchText }) => {
    return (
        <div>
            {searchText.length > 0 && notes.length < 1 ? <h3 style={{ color: 'red', textAlign: 'center' }}>Sorry! No Notes Found</h3> : <Filter handleFilterText={handleFilterText} />}
            <NotesCardContainer notes={notes} />
        </div>
    )
}

export default HomePage
