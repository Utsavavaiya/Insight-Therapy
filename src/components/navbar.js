import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function MainNav() {
  return (
    <>

    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary" style={{marginTop:"0rem"}}>
      <Container style={{ marginLeft:"0rem"}}>
      <Navbar.Brand href="/" style={{fontFamily:"fantasy", fontSize:"2rem", marginLeft:"0.5rem", marginRight:"2.5rem"}}>Insight Therapy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" style={{fontSize:"1.2rem"}}>
            <Link to='/' style={{color:"black"}} className='nav-link'>Home</Link>
            <Link to='/yoga' style={{color:"black"}} className='nav-link'>Yoga</Link>
            <Link to='/meditation' style={{color:"black"}} className='nav-link'>Meditation</Link>
            <Nav.Link href="#link" style={{color:"black"}} className='nav-link'>Appointments</Nav.Link>
            <Link to="/books" style={{color:"black"}} className='nav-link'>Books</Link>
            <Link to='/blogs' style={{color:"black"}} className='nav-link'>Blogs</Link>
        </Nav>
        
          <Nav style={{fontSize:"1.2rem",position:"absolute",right:"2.5vw"}}>
          <NavDropdown title="Help Center" id="collasible-nav-dropdown" style={{color:"black"}}>
              <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Top FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Troubleshooting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Privacy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Account Setting</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link eventKey={2} href="#memes" style={{color:"black", marginLeft:"1.5rem"}}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MainNav;