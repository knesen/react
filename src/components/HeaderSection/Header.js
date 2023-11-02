import React from 'react'
import TopRow from './TopRow'
import BottomRow from './BottomRow'
import img_logotype from '../../assets/images/logotype.svg'
import '../../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
            <Link to="/"><img src={img_logotype} alt="crito logotype" /></Link>
            <button className="menu-bars"><i className="fa-light fa-bars"></i></button>
            <div className="header-menu">
                <TopRow />                
                <BottomRow />                
            </div>
            </div>
        </header>
    )
}

export default Header