import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import logo from "./logo.jpg"

import "./Navbar.css"

const NavBar = () =>
    <>


        <Navbar bg="back" variant="dark" sticky="top">



            <Navbar.Brand className="brand">
                <img src={logo} className="logo" />{' '}
                CreativaKids
            </Navbar.Brand>


            <nav className="elements">
                <Nav.Link className="links" href="#">INICIO</Nav.Link>
                <Nav.Link className="links" href="#">ACERCA DE MI</Nav.Link>
                <NavDropdown className="links" title="PRODUCTOS" id="ddl" >
                    <NavDropdown.Item href="PRODUCTOS/AMIGURUMIS">AMIGURUMIS</NavDropdown.Item>
                    <NavDropdown.Item href="PRODUCTOS/AMIGURUMIS">ROPA</NavDropdown.Item>
                    <NavDropdown.Item href="PRODUCTOS/AMIGURUMIS">ACCESORIOS</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="links" href="#">CONTACTAME</Nav.Link>
            </nav>



        </Navbar>



    </>

export default NavBar