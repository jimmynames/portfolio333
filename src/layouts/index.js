import React from 'react'
// import Link from 'gatsby-link'
import Navigation from '../components/Navigation/index.js'
import { injectGlobal, styled, css } from 'react-emotion'

require('normalize.css')

injectGlobal`
body {
    font-family: sans-serif;
    background: white;
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

const WrapLayout = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 693px) {
    flex-direction: column;
  }

  @media (min-width: ) {
    min-width: 1200px;
  }
`

export default class Layout extends React.Component {
  render () {
    return (
      <div className={WrapLayout}>
        <Navigation />
        <div className={bodyWrapper}>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

// Original Layout code

// const Layout = ({ children }) => (
//   <div className={WrapLayout}>
//     <Navigation />
//     <Lol />
//     <div className={bodyWrapper}>
//       { children() }
//     </div>
//   </div>
// )
