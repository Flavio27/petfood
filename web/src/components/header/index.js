import React from 'react';
import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';
import { Link } from 'react-router-dom'
import './styles.css'

export default function Header({ whiteVersion, hideCart }) {
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event)
  }

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <Link to="/">
          <img src={whiteVersion ? logoWhite : logo} alt="logo" />
        </Link>
      </header>
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className="btn btn-secondary cart-button">
          <span className="mdi mdi-cart"></span> 2 Ítens
        </button>
      )}
    </div>
  );
}
