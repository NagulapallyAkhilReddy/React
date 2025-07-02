import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { motion } from "motion/react"
import {NavLink} from "react-router-dom"
// import * as motion from "motion/react-client"


function Header() {
  return (
    <Navbar expand="lg" className="bg-success ">
      <Container >
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease:"easeInOut" }}
            whileHover={{scale:1.2}}
        ><Navbar.Brand href="/home" >My Portfolio</Navbar.Brand></motion.div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex justify-end gap-4 ms-auto ">
            <Nav.Link as={NavLink} to="/home" className={({isActive})=>isActive? "!text-orange-500":""} >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={({isActive})=>isActive? "!text-orange-500":""}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className={({isActive})=>isActive? "text-orange-500":""}>Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={({isActive})=>isActive? "text-orange-500":""}>Contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;