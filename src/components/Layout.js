import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Mesilasemade kasvatus ja müük" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
