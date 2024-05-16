import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                <li className="nav-item"><Link to="/logout" className="nav-link">Logout</Link></li>
                <li className="nav-item"><Link to="/upload" className="nav-link">Upload Colaboradores</Link></li>
                <li className="nav-item"><Link to="/event" className="nav-link">Adicionar Evento</Link></li>
                <li className="nav-item"><Link to="/evaluationForm" className="nav-link">evaluation form</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;