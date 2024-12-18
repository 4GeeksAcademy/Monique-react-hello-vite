import React from "react";

function Navbar(){
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-opacity-75 bg-dark">
            <div className="container-fluid">
             <a className="navbar-brand" href="#">Start Bootstrap</a>
             </div>
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
