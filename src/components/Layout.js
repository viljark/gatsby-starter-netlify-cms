import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import favicon from "../img/favicon.ico";
import "./all.scss";

typeof window !== 'undefined' && require("picturefill") && require("picturefill/dist/plugins/mutation/pf.mutation");

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Mesilasemade kasvatus ja müük</title>
      <link rel="shortcut icon" type="image/png" href={`${favicon}`}/>
      <meta name="description" content="Mesilasemade kasvatus ja müük"/>
      <meta name="google-site-verification" content="DD9F-Odf_EZ2jaCNc3GnjlLW8dhzwz6cUTKgw6wikgA" />
      {/*<meta name="image" content={image} />*/}

      {/* OpenGraph tags */}
      <meta property="og:url" content="https://mesilasemad.ee"/>
      <meta property="og:title" content="Mesilasemade kasvatus ja müük"/>
      <meta property="og:description" content="Mesilasemade kasvatus ja müük"/>
    </Helmet>
    <Navbar/>
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
