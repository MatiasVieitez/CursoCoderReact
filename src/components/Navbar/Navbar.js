import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from "./logo.jpg"
import { Link } from 'react-router-dom'
import "./Navbar.css"
import Cartwidget from '../CartWidget/Cartwidget'

const NavBar = () =>
    <>
        <Navbar bg="back" variant="dark" sticky="top" expand="md" collapseOnSelect>

            <Navbar.Brand className="brand" >
                <Nav.Link as={Link} to={"/"}>
                    <img src={logo} className="logo" alt="Logo" />{' '}
                    <span className="titulo">CreativaKids</span>
                </Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <nav className="elements">

                    <Nav.Link className="links" as={Link} to={"/"}>INICIO</Nav.Link>
                    <Nav.Link className="links" href="#">ACERCA DE MI</Nav.Link>
                    <NavDropdown className="links" title="PRODUCTOS" id="ddl" >
                        <Nav.Link className="links1" as={Link} to={"/categoria/1"}><NavDropdown.Item href="PRODUCTOS/categoria 1">categoria 1</NavDropdown.Item></Nav.Link>
                        <Nav.Link className="links1" as={Link} to={"/categoria/2"}><NavDropdown.Item href="PRODUCTOS/categoria 2">categoria 2</NavDropdown.Item></Nav.Link>
                        <NavDropdown.Item href="PRODUCTOS/AMIGURUMIS">ACCESORIOS</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="links" href="#">CONTACTAME</Nav.Link>
                    <Nav.Link className="links" as={Link} to={"/cart"}><Cartwidget /></Nav.Link>

                </nav>
            </Navbar.Collapse>

        </Navbar>
    </>

export default NavBar