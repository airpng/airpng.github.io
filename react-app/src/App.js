import React from 'react';
import './css/App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CustomServices from './components/CustomServices';

function App() {
  
  return (
    <div className="App">
      <Navbar sticky="top" expand="lg" className='airpng-navbar'>
        <Container>
          <Navbar.Brand href="#home">Airpng</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='right-aligned'>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services-sec">Our Services</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section class="section parallax bg1" id="home">
        <Container className="airpng-top">
          <h1>Airpng</h1>
          <h1>High quality photos that grow your bookings</h1>
        </Container>
      </section>
      <section class="section static" id="services-sec">
        <div className="our-services-sec">
          <h1>Our Services</h1>
          <Container className='our-services-card-container' fluid>
            <CustomServices/>
          </Container>
          </div>
      </section>
      <section class="section parallax bg2" id="contact">
        <div className="contact-us-container">
          <div className='contact-us-top'>
            <h1>Contact us</h1>
          </div>
          <div className='contact-us-bottom'>
            <h3>For general inquiries, pricing, careers, and more...</h3>
            <h5><a href="mailto:airpngphotography@gmail.com">airpngphotography@gmail.com</a></h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
