import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({setShow}) {
  return (
    <Navbar expand="lg" className="bg-success ">
      <Container className='d-flex  justify-content-between container-fluid'>
        <Navbar.Brand href="#home">CRUD Operations</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="  justify-content-end">
          <Nav className='ms-auto'>
            <Button className='btn btn-danger p-2 bg-black text-white' onClick={()=>setShow(true)} >+</Button>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;