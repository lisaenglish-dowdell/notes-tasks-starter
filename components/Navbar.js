import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Notes & Tasks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
            <Link href="/about" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>
            <Link href="/contact" passHref legacyBehavior><Nav.Link>Contact</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
