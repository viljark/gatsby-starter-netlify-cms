import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="">
        <footer className="footer">
          <div className="content is-small has-text-centered">
            <div>
              <strong>emadekasvatus.ee</strong>
              <p className="is-marginless">tel: <a href="tel:55555555">55555555</a></p>
              <p className="is-marginless">e-mail: <a href="maitlo:email@email.com">email@email.com</a></p>
            </div>
          </div>
        </footer>
      </div>

    );
  }
}

export default Footer;