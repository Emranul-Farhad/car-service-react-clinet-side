import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebaseKey/Firekey';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth)

    const logout = () => {
        signOut(auth);
      };

    return (
        <nav>
            <div className="nav-container">
                <h1 className="gradient">Repair</h1>

                <div className="nav-list">

                    <NavLink className={({ isActive }) => (isActive ? "active" : "nav-list")} to="/" > Home</NavLink>

                    <NavLink className={({ isActive }) => (isActive ? "active" : "nav-list")} to="/services" > services</NavLink>

                    <NavLink  className={({ isActive }) => (isActive ? "active" : "nav-list")} to="/Experts" > Our Expert</NavLink>

                 { user ? <button onClick={logout} className='logoutButton'>LogOut</button>:

                  <NavLink className={({ isActive }) => (isActive ? "active" : "nav-list")}
                        to="/login" > Login</NavLink> }

                </div>
            </div>
        </nav>
    );
};

export default Header;