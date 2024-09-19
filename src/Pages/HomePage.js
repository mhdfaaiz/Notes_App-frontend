import React from 'react'
import Filter from '../components/Filter'
import NotesCardContainer from '../components/NotesCardContainer'

const HomePage = ({ notes, handleFilterText }) => {
    return (
        <div>
            <Filter handleFilterText={handleFilterText} />
            <NotesCardContainer notes={notes} />
        </div>
    )
}

export default HomePage
