import React from 'react';
import logo from '../assets/Bitmap.png';
import searchicon from '../assets/searchicon.png'
import bellicon from '../assets/bellicon.png'
import profilepic from '../assets/profilepic.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="search">
                    <select className="dropdown">
                      <option value="All">All</option> 
                    </select>
                <div className="search-input-container">
                    <input type="search" className="search-input" 
                    placeholder="Search..."/>
                    <img src={searchicon} alt="search icon"
                        className='search-icon'
                    />
                </div>
            </div>
            <div className="profile">
                <img src={bellicon} className="bell-icon"/>
                <img src={profilepic} alt="profile photo"
                    className="profile-pic"
                />
                <p className="profile-name">Simple Transport</p>
                <span className='drop-arrow'><i class="fas fa-sort-down"></i></span>
            </div>
        </div>
    )
}

export default Navbar
