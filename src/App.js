import './css/App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import photographer from "./assets/pexels-luis-quintero-1759531.jpg";

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" expand="lg" className='airpng-navbar'>
        <Container>
          <Navbar.Brand href="#home">AirPng</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='right-aligned'>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section class="section parallax bg1">
        <div>
          <h1>AirPng</h1>
          <h1>High quality photos that grow your bookings</h1>
        </div>
      </section>
      <section class="section static">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={photographer} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </section>
      <section class="section parallax bg2">
         <h1>Fluffy Kitten</h1>
      </section>
    </div>
  );
}

export default App;
