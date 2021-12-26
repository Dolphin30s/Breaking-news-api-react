import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import { Link } from 'react-router-dom'

//css
import './nav.css'

const MyNav = () => {

    const [homeWeight, setHomeWeight] = useState('bold')
    const [characterWeight, setCharacterWeight] = useState()


    const setWeight = page => {

        if (page === 'characterWeight') {
            setCharacterWeight('bold')
            setHomeWeight('')
        }
        else {
            setHomeWeight('bold')
            setCharacterWeight('')
        }

    }
    return (
        <Navbar variant="dark" style={{ background: `rgb(54, 32, 32)` }} expand="lg" className='col-sm-12' id='navBar'>

            <Navbar.Brand href="/" className='col-sm-12 col-lg-2 font-weight-bold titleOfNav'
            >The Breaking Bad
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-dark-example" />

            <Navbar.Collapse id="navbar-dark-example" className='col-sm-12 col-lg-7 text-center'>
                <Nav className='text-left row'>

                    <NavItem className='navItem col-sm-12 col-lg-2 text-center' style={{ fontWeight: homeWeight }}>
                        <Link to='/'> <span id='homeItem'
                            onClick={homeWeight => setWeight('homeWeight')}
                        > Home</span></Link>
                    </NavItem>

                    <NavItem className='navItem col-sm-12 col-lg-2 text-center' style={{ fontWeight: characterWeight }}>
                        <Link to='/characters'> <span id='homeItem'
                            onClick={characterWeight => setWeight('characterWeight')}
                        > Characters</span></Link>
                    </NavItem>
                </Nav>

            </Navbar.Collapse>
            <img className='navLogo col-sm-12 col-lg-2' src='../breakingbad.png' />

        </Navbar >
    )
}
export default MyNav