import React from 'react'
import Navibar from './components/Navibar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filter from './components/Filter';
import NotesCardContainer from './components/NotesCardContainer';
function App() {
  return (
    <div>
      <Router>
        <Navibar />
        <Filter />
        <NotesCardContainer />
      </Router>
    </div>
  )
}

export default App
