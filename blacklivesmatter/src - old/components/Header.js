import React from 'react'
import './Header.css'

import { Navbar, } from 'react-bootstrap'
import icon from './icon.svg'


function Header(){
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home" className="Tag-Line">
                <img
                    alt=""
                    src={icon}
                    width="32"
                    height="32"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header