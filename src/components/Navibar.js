import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';



function navbar({ searchText, handleSearchText }) {
    return (
        <div>
            <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
                <div className="container d-flex justify-content-around">
                    <Link className="navbar-brand" to="/">
                        <h4 style={{ fontWeight: "bold" }}>F~Notes</h4>
                    </Link>
                    <div className="d-flex">
                        <div
                            className="input-group input-group-sm"
                            style={{ width: "500px", height: "40px" }}
                        >
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchText}
                                onChange={(e) => handleSearchText(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </div>
                    </div>

                    <Link to="/add-notes" style={{ textDecoration: "none" }}>
                        <button
                            className=" add btn btn-outline-primary btn-md"
                            type="button"

                        >
                            <FaSquarePlus /> Add Notes
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default navbar
