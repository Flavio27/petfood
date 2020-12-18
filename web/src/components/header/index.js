import React from 'react';
import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';
import './styles.css'

export default function Header({ whiteVersion }) {
  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <img src={whiteVersion ? logoWhite : logo} alt="logo" />
      </header>
      <button className="btn btn-secondary cart-button">
        <span className="mdi mdi-cart"></span> 2 Ítens
      </button>
    </div>
  );
}