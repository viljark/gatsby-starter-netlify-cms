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
              <h1>Emadekasvatus.ee</h1>
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
                 href="https://www.kuldnebors.ee/search/pollumajandus/pollu-ja-aiasaadused-toidukaubad/varske-urvaste-mesi/search.mec?pob_post_id=82182579&pob_action=show_post&pob_cat_id=10833&pob_browser_offset=&pob_view_language_id=et">
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
