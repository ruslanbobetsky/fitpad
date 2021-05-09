import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import paths from '../../router/paths';
import AuthManager from '../../services/AuthManager';

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to={paths.main}>
          Fitpad
        </Navbar.Brand>
        <NavLink to={paths.cardio}>
          Cardio
        </NavLink>
        <NavLink to={paths.drugs}>
          Drugs
        </NavLink>
        <NavLink to={paths.exercise}>
          Exercise
        </NavLink>
        <NavLink to={paths.health}>
          Health
        </NavLink>
        <NavLink to={paths.nutrition}>
          Nutrition
        </NavLink>
        <NavLink to={paths.training}>
          Training
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button onClick={() => AuthManager.logout()}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
