import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <Container>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Aboutus">Aboutus</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">Services</Link>
                </li>
              
                <li className='nav-item'>
                  <Link className="nav-link" to="/Labs">Labs</Link>
                </li>

                <li className='nav-item'>
                  <Link className="nav-link" to="/Employeelist">Employee List</Link>
                </li>

                <li className='nav-item'>
                  <Link className="nav-link" to="/Test">Test</Link>
                </li>
                <li className='nav-item'>
                  <Link className="nav-link" to="/Practise">Practise</Link>
                </li>
                <li className='nav-item'>
                  <Link className="nav-link" to="/Parent">Parentchild</Link>
                </li>
                <li className='nav-item'>
                  <Link className="nav-link" to="/Curency">Curency</Link>
                </li>
                <li className='nav-item'>
                  <Link className="nav-link" to="/Contact">Contact</Link>
                </li>

            </ul>
        </div>
    </div>
</nav>
</Container>
  )
}

