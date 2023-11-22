import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logoImage from '../imgs/material-symbols_home-pin.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export const  MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><Link to="/"><img src={logoImage}/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"><Link to="/about">About</Link></Nav.Link>
              <Nav.Link href="#link">Contact us</Nav.Link>
              <Nav.Link href="#link">Timetable</Nav.Link>
              <Nav.Link href="#link">live location</Nav.Link>
            </Nav>
            <Form classname= "d-flex">
                <Button varient="danger">Sign in</Button>
            </Form>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}