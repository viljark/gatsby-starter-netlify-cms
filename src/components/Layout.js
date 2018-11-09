import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import favicon from "../img/favicon.ico";
import "./all.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Mesilasemade kasvatus ja müük</title>
      <link rel="shortcut icon" type="image/png" href={`${favicon}`}/>
      <meta name="description" content="Mesilasemade kasvatus ja müük"/>
      {/*<meta name="image" content={image} />*/}

      {/* OpenGraph tags */}
      <meta property="og:url" content="https://emadekasvatus.ee"/>
      <meta property="og:title" content="Mesilasemade kasvatus ja müük"/>
      <meta property="og:description" content="Mesilasemade kasvatus ja müük"/>
    </Helmet>
    <Navbar/>
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
