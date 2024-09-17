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
        setNotes([...notes, res.data])
        toast.success("A new note has been added")
        console.log(res.data)
      })
      .catch(err => {
        console.log(console.log(err.message))
      })
  }

  const updatedNote = (data, slug) => {
    axios.put(`http://127.0.0.1:8000/notes/${slug}/`, data)
      .then(res => {
        console.log(res.data)
        toast.success("Note updated successfully")
      })
      .catch(err => console.log(err.message))
  }

  const deleteNote = (slug) => {
    axios.delete(`http://127.0.0.1:8000/notes/${slug}/`)
      .then(res => {
        setNotes(notes.filter(note => note.slug !== slug));
      })
      .catch(err => console.log(err.message))
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage notes={notes} />} />
      <Route path="/add-notes" element={<AddNotes addnote={addnote} />} />
      <Route path="/edit-notes/:slug" element={<EditNotes updatedNote={updatedNote} />} />
      <Route path="/notes/:slug" element={<NoteDetails deleteNote={deleteNote} />} />
    </Route>
  ))
  return <RouterProvider router={router} />
}
export default App
