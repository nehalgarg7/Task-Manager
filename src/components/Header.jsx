import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="logo">
            <Link to="/" className="link">
              AulaCube
            </Link>
          </div>
          <div className="links">
            <ul>
              {window.location.pathname === "/add" ? (
                ""
              ) : (
                <li>
                  <Link to="/add" className="link">
                    Add Task
                  </Link>
                </li>
              )}

              {window.location.pathname === "/" ? (
                ""
              ) : (
                <li>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
              )}
              <li id="last">
                <Link id="last" className="link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

// {window.location.pathname === "/" ? "": "Home"}  <li id="last">About</li>
//{window.location.pathname === "/about" ? "" : <li id="last"><Link id="last" className="link" to="/about">About</Link></li>}
// <li><Link to="/" className="link">
//                                 Home
//                                 </Link></li>
{
  /* <br />

<Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link href="/add">{window.location.pathname === "/add" ? "" : "Add Task"}</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
<Navbar bg="primary" data-bs-theme="dark">
  <Container>

    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
</Navbar>

<br />
<Navbar bg="light" data-bs-theme="light">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
</Navbar> */
}
