import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mmm from '../assets/img/testimonials-3.jpg'
// import { Butt } from './butt';

function Bbb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
         
          <img src={mmm} style={{width:"5%"}} alt="" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Mens</Nav.Link>
            <Nav.Link href="#home">Pages</Nav.Link>
          

            <Nav.Link href="#link">Contact</Nav.Link>
           <Butt />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Bbb};