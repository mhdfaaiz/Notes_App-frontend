import React, { useEffect, useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AddNotes from './Pages/AddNotes';
import NoteDetails from './Pages/NoteDetails';
import EditNotes from './Pages/EditNotes';
import axios from 'axios';
import { toast } from 'react-toastify';

const App = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/notes/").then(res => {
      setNotes(res.data)
    })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  const addnote = (data) => {
    axios.post("http://127.0.0.1:8000/notes/", data)
      .then(res => {
        setNotes([...notes, data])
        toast.success("A new note has been added")
        console.log(res.data)
      })
      .catch(err => {
        console.log(console.log(err.message))
      })
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage notes={notes} />} />
      <Route path="/add-notes" element={<AddNotes addnote={addnote} />} />
      <Route path="/edit-notes/:slug" element={<EditNotes />} />
      <Route path="/notes/:slug" element={<NoteDetails />} />
    </Route>
  ))
  return <RouterProvider router={router} />
}
export default App
