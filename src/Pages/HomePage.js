import React from 'react'
import Filter from '../components/Filter'
import NotesCardContainer from '../components/NotesCardContainer'

const HomePage = ({ notes }) => {
    return (
        <div>
            <Filter />
            <NotesCardContainer notes={notes} />
        </div>
    )
}

export default HomePage
