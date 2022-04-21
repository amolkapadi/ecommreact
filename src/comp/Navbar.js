import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar py-2 my-2 navbar-expand-lg  navbar-light sticky-top"
            >
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">React<span className='text'> Store</span> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                         
                          
                        </ul>
                        <div className='buttons'>
                            <Link to='/login' className='btn btn-primary'>
                            <i className="bi bi-person-hearts"> </i>
                            </Link>

                            <Link to='/register' className='btn btn-primary ms-2'>
                            <i className="bi bi-person-plus-fill "> </i>
                            </Link>

                            <a to='/card' className='btn btn-primary ms-2'>
                            <i className="bi bi-bag-plus-fill me-1"></i>
                            <span class="badge bg-dark">0</span></a>
        
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
