'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Demo Restaurant</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={activeMenu === 'Home' ? "nav-link active" : "nav-link"} onClick={() => { setActiveMenu('Home') }} href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={activeMenu === 'aboutUs' ? "nav-link active" : "nav-link"} onClick={() => { setActiveMenu('aboutUs') }} href="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={activeMenu === 'contact' ? "nav-link active" : "nav-link"} onClick={() => { setActiveMenu('contact') }} href="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className={activeMenu === 'tableBooking' ? "nav-link active" : "nav-link"} onClick={() => { setActiveMenu('tableBooking') }} href="/table-booking">Table Booking</Link>
            </li>
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
