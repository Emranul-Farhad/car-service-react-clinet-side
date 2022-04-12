import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <nav>
            <div className="nav-container">
                <h1 className="gradient">Repair</h1>

                <div className="nav-list">

                    <NavLink className={({ isActive }) => (isActive ? "active" : "nav-list")} to="/" > Home</NavLink>

                    <NavLink className={({ isActive }) => (isActive ? "active" : "nav-list")} to="/services" > services</NavLink>

                    <NavLink className={({ isActive }) => (isActive ? "active" : "nav-list")} to="/Experts" > Our Expert</NavLink>

                    <NavLink className={({ isActive }) => (isActive ? "active" : "nav-list")}
                        to="/login" > Login</NavLink>

                </div>
            </div>
        </nav>
    );
};

export default Header;