import React from 'react'
// import Link from 'gatsby-link'
import Navigation from '../components/Navigation2/index.js'
import { injectGlobal, css } from 'react-emotion'

injectGlobal`
body {
    font-family: sans-serif;
    background: black;
  }
  * {
    transition: all 0.6s ease-in-out;
  }
  h1, h2, h3, h4, h5, p, a, ul, li {
    font-family: sans-serif;
    transition: color 0.3s ease-in-out;
  }
`

const bodyWrapper = css`
  padding: 2rem 5rem;
`

require('normalize.css')

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <div className={bodyWrapper}>
      { children() }
    </div>
  </div>
)

export default Layout
