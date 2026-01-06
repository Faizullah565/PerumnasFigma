import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbars.css'
const Navbars = () => {
  return (
    <div className="whole-navbar">
      <Navbar className="desktop-responsive-navbar">
        <Container>
          <Navbar.Brand>
            <img src="/frame6.png" alt="" />
          </Navbar.Brand>
          {/* <Navbar.Toggle /> */}
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img src="/Logo.png" className='logoOfPage' alt="Logo" />
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/contact" className='navbarContact'>Contact Us</Link>
              <Link to="/about" className='navbarAbout'>About Us</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="mobile-responsive-navbar">
        <Container>
          <img src="/Logo.png" className='logoOfPage' alt="Logo" />
          <Navbar.Brand>
          </Navbar.Brand>
          {/* <Navbar.Toggle /> */}
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img src="/frame6.png" alt="" />
            </Navbar.Text>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;