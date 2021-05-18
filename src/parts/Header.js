import React from 'react'

import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';


import Button from 'elements/Button'

export default function Header(props) {
    return (
      
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/" className="navbar-brand text-primary"> <h1>ES</h1> </NavLink>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                       <NavLink to="/" className="nav-link">Home</NavLink> 
                    </li>
                    <li className="nav-item">
                        <Link  
                        to="about"
                        smooth={true}
                        duration={1000} 
                        className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link  
                        to="portfolio"
                        smooth={true}
                        duration={1000} 
                        className="nav-link">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                    <Link  
                        to="contact"
                        smooth={true}
                        duration={1000} 
                        className="nav-link">Contact</Link>
                    </li>
                    </ul>
                <ul className="navbar-right">
                    <a href="https://wa.link/03iu35">

                    <Button isDanger isDefault>Hire Me!</Button>
                    </a>
                </ul>
                </div>
                </nav>
         
    )
}
