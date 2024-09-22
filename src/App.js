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
  const [searchText, setSearchText] = useState("")

  const handleSearchText = (val) => {
    setSearchText(val)
  }

  useEffect(() => {
    if (searchText.length === 0) {
      axios.get('https://f-notes-django-1.onrender.com/notes/')
        .then(res => {
          setNotes(res.data);
        })
        .catch(err => console.log(err.message));
      return
    }
    if (searchText.length < 3) return;

    axios.get(`https://f-notes-django-1.onrender.com/notes-search/?search=${searchText}`)
      .then(res => {
        setNotes(res.data)
      })
      .catch(err => console.log(err.message))
  }, [searchText])

  useEffect(() => {

    axios.get("https://f-notes-django-1.onrender.com/notes/").then(res => {
      setNotes(res.data)
    })
      .catch(err => {
        console.log(err.message)
      })
  }
    , [])

  const [filterText, setFilterText] = useState("")

  const handleFilterText = (val) => {
    setFilterText(val)
  }

  const filteredNotes = filterText === "BUSINESS" ? notes.filter((note) => note.category === "BUSINESS") :
    filterText === "PERSONAL" ? notes.filter((note) => note.category === "PERSONAL") :
      filterText === "IMPORTANT" ? notes.filter((note) => note.category === "IMPORTANT") :
        notes

  const addnote = (data) => {
    axios.post("https://f-notes-django-1.onrender.com/notes/", data)
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
    axios.put(`https://f-notes-django-1.onrender.com/notes/${slug}/`, data)
      .then(res => {
        console.log(res.data)
        toast.success("Note updated successfully")
      })
      .catch(err => console.log(err.message))
  }

  const deleteNote = (slug) => {
    axios.delete(`https://f-notes-django-1.onrender.com/notes/${slug}/`)
      .then(res => {
        setNotes(notes.filter(note => note.slug !== slug));
      })
      .catch(err => console.log(err.message))
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route basename="/notesapp-react" path="/" element={<MainLayout searchText={searchText} handleSearchText={handleSearchText} />}>
      <Route index element={<HomePage notes={filteredNotes} handleFilterText={handleFilterText} searchText={searchText} />} />
      <Route path="/add-notes" element={<AddNotes addnote={addnote} />} />
      <Route path="/edit-notes/:slug" element={<EditNotes updatedNote={updatedNote} />} />
      <Route path="/notes/:slug" element={<NoteDetails deleteNote={deleteNote} />} />
    </Route>
  ))
  return <RouterProvider router={router} />
}
export default App
