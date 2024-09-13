import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AddNotes from './Pages/AddNotes';
import NoteDetails from './Pages/NoteDetails';
import EditNotes from './Pages/EditNotes';

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/add-notes" element={<AddNotes />} />
      <Route path="/edit-notes" element={<EditNotes />} />
      <Route path="/detail-notes" element={<NoteDetails />} />
    </Route>
  ))
  return <RouterProvider router={router} />
}
export default App
