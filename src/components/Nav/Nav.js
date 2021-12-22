import React, { useState } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

//css
import './nav.css'

const MyNav = () => {

    const [bgDark, setBgDark] = useState(`rgb(54, 32, 32)`)

    return (
        <Navbar variant="dark" style={{ background: bgDark }} expand="lg" className='col-sm-12' id='navBar'>

            <Navbar.Brand href="/" className='col-sm-12 col-lg-7 font-weight-bold titleOfNav'
            >Breaking Bad Episodes
            </Navbar.Brand>


            <Navbar.Collapse id="navbar-dark-example" className='col-sm-12 col-lg-5 text-center'>
                <Nav className='text-left row'>

                    <NavItem className='navItem col-sm-12 col-lg-2 text-center'>
                        {/* <Link> <span id='homeItem'> Home</span></Link> */}
                    </NavItem>

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}
export default MyNav