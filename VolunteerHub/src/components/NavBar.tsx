import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Container className={styles.container}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">
                Home
              </Link>
              <Link
                className="nav-item nav-link"
                to="/Create-Volunteering-Event"
              >
                Create Event
              </Link>
              <Link className="nav-item nav-link" to="/">
                Profile
              </Link>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};
export default NavBar;
