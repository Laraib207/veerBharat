'use client';
import React, { useState } from 'react';
import './Navnar.css';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Veer Bharat Grocery
      </div>
      <button
        className="navbar-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar-hamburger">&#9776;</span>
      </button>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Product</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;