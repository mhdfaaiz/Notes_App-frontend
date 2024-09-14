import React, { useEffect, useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AddNotes from './Pages/AddNotes';
import NoteDetails from './Pages/NoteDetails';
import EditNotes from './Pages/EditNotes';
import axios, { Axios } from 'axios';

const App = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/notes/").then(res => {
      console.log(res.data)
      setNotes(res.data)
    })
      .catch(err => {
        console.log(err.message)
      })
  })

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage notes={notes} />} />
      <Route path="/add-notes" element={<AddNotes />} />
      <Route path="/edit-notes" element={<EditNotes />} />
      <Route path="/detail-notes" element={<NoteDetails />} />
    </Route>
  ))
  return <RouterProvider router={router} />
}
export default App
