import React from 'react'
// import Link from 'gatsby-link'
import Navigation from '../components/Navigation/index.js'
import { injectGlobal, styled, css } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'

// import PageRender from '../components/PageRender/index.js'

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

const WrapLayout = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
  ${'' /* background: ${props => props.theme.black}; */}
  @media (max-width: 693px) {
    flex-direction: column;
  }

  @media (min-width: ) {
    min-width: 1200px;
  }
`

const PageRender = css`
  width: auto;
  height: 100%;
  box-sizing: border-box;
  padding: 1.35rem;
  padding-left: 4rem;
  width: 78vw;
  overflow: hidden;
  overflow-y: scroll;
  ${'' /* background: ${props => props.theme.black}; */}
  @media (max-width: 693px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
  @media (max-width: 414px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 1295px) {
    width: 100%;
  }
`

const nightMode = {
  label: 'nightMode',
  black: 'black',
  white: 'white',
  blue: 'blue'
}

export default class Layout extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     isDark: true,
  //     theme: nightMode
  //   }
  // }
  render () {
    return (
      <ThemeProvider theme={nightMode} >
        <div className={WrapLayout}>
          <Navigation />
          <div className={PageRender}>
            {this.props.children()}
          </div>
        </div>
      </ThemeProvider>
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
