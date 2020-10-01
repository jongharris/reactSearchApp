import React from 'react';
import './styles.css'
import Link from './Link'
const Header = () => {
    //return the links
    return (
        <div className = "nav-items">
            <Link href = "/"> 
                Weather
            </Link>
            <Link href = "/youtube">  
                Youtube
            </Link>
            <Link href = "/picture"> 
                Picture
            </Link>
      </div>
    )
}

export default Header;