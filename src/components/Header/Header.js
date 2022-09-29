import React from 'react';
import logo from './fitness-gym-logo-9191CD4CF2-seeklogo.com.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className='d-flex container header'>
                <img className='img mt-4' src={logo} alt="" />
                <h1 className='text-primary mt-5'>Fitness Heroes</h1>
            </div>
            <div className='container mt-3 text-info'>
                <h6> <b>Select today’s exercise</b></h6>
            </div>
        </div>
    );
};

export default Header;