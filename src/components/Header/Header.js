import React from 'react';
import logo from './fitness-gym-logo-9191CD4CF2-seeklogo.com.png'
import './Header.css'
const Header = () => {
    return (
        <div className='d-flex container header'>
            <img className='img mt-4' src={logo} alt="" />
            <h2 className='text-primary mt-5'>Fitness Heroes</h2>
        </div>
    );
};

export default Header;