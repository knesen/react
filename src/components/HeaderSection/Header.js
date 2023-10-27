import React from 'react'
import TopRow from './TopRow'
import BottomRow from './BottomRow'
import img_logotype from '../../assets/images/logotype.svg'
import '../../App.css'

const Header = () => {
    return (
        <header>
            <div class="container">
            <img src={img_logotype} alt="crito logotype" />
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