import "./App.css";
import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="App">
      <Navbar expanded={expanded} bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">MyApp</Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            aria-controls="navbar-nav"
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item href="/action1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="/action2">Action 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/action3">Action 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>Hello World</div>
    </div>
  );
}

export default App;
