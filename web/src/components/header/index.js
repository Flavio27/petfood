import React from 'react'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logo-white.png'


export default function Header({ whiteVersion }) {
    return (
        <div className="col-12">
            <header className="py-4 px-4 text-center">
            <img src={whiteVersion ? logoWhite : logo} alt="logo" />
            </header>
            
        </div>
    )
}
