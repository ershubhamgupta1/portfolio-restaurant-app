import React from 'react'

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Bootstrap Restaurant</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Table Booking</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Menu</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Indian</a></li>
                  <li><a className="dropdown-item" href="#">Italian</a></li>
                  <li><a className="dropdown-item" href="#">Chinese</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
export default Header
