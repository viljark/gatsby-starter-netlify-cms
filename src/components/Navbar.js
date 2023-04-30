import React, { Component } from "react";
import { Link } from "gatsby";

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <h1>Mesilasemad.ee</h1>
            </a>
            <span className={`navbar-burger burger ${this.state.open ? "is-active" : ""}`}
                  data-target="navbarMenu"
                  onClick={() => {
                    this.setState({ open: !this.state.open });
                  }}>
                <span></span>
                <span></span>
                <span></span>
          </span>
          </div>
          <div id="navbarMenu" className={`navbar-menu ${this.state.open ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/">
                Avaleht
              </Link>
              <Link className="navbar-item is-hidden-desktop" to="/#tellimine">
                Tellimine
              </Link>
              <Link className="navbar-item" to="/ajalugu">
                Ajalugu
              </Link>
              <Link className="navbar-item" to="/galerii">
                Galerii
              </Link>
              <a className="navbar-item"
                 href="https://urvastemesi.ee">
                Mee müük
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
