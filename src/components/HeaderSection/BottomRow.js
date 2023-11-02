import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const BottomRow = () => {
    return (
        <div className="bottom-row">
            <nav className="navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/contact">Contact</NavLink>                
            </nav>
            <Link to="/login" className="rounded-button orange-button">Login
                <i className="fa-solid fa-arrow-up-right"></i>
            </Link>
        </div>
    )
}

export default BottomRow

