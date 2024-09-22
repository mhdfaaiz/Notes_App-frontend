import React, { useEffect, useState } from 'react'
import './AddNotes.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const EditNotes = ({ updatedNote }) => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [category, setCategory] = useState("")

    const { slug } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://f-notes-django-1.onrender.com/notes/${slug}`)
            .then(res => {
                setTitle(res.data.title)
                setBody(res.data.body)
                setCategory(res.data.category)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [slug]);

    const updatedNoteCategory = {
        title: title,
        body: body,
        category: category
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title && !body && !category) return;
        updatedNote(updatedNoteCategory, slug)
        navigate(`/notes/${slug}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h5>Edit Current Note</h5>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Title
                    </label>
                    <input
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter note's title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Content
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={4}
                        placeholder="Enter note's content"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Note's category
                    </label>
                    <select className="form-select" aria-label="Default select example" value={category}
                        onChange={(e) => setCategory(e.target.value)} style={{ height: "40px" }}>
                        <option value="">Pick a category</option>
                        <option value="BUSINESS">Business</option>
                        <option value="PERSONAL">Personal</option>
                        <option value="IMPORTANT">Important</option>
                    </select>
                </div>




                <button className="btn btn-primary d-flex justify-content-center" style={{ width: "100%" }}>Update Note</button>
            </form>
        </div>
    )
}

export default EditNotes
