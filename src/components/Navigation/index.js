import React from 'react'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import Link from 'gatsby-link'

import logo from '../../gif/jn.gif'

import EmojiToggle from '../EmojiToggle/index.js'

const NavComp = styled.section`
  width: 20%;
  height: 100%;
  z-index: 666;
  ${'' /* background: ${props => props.theme.black}; */}
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 693px) {
    width: 100%;
    padding: 0.75em;
    position: relative;
  }
  @media (max-width: 414px) {
  }
`

const Logo = styled.img`
  width: 100%;
  padding-top: 1.25rem;
  margin: 0;
  @media (max-width: 693px) {
    padding-top: 0;
    width: 50%;
    margin: 0 auto;
  }
`

const PaddingMobile = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

@media (max-width: 414px) {
  box-sizing: border-box;
}
`

const NavMenu = styled.ul`
  text-decoration: none;
  width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: 693px) {  }

  a {
    text-decoration: none;
  }

  ${'' /* a:hover {
    color: ${props => props.theme.white};
  } */}
`

const NavItem = styled.li`
  font-size: 18px;
  padding: 0.666em;
  font-family: 'Open Sans Condensed', Helvetica;
  list-style-type: none;
  text-decoration: none;
  text-align: left;
  margin: 1.5em 0;
  /* linear-gradient(to right, transparent, red 50%, transparent 90%, transparent) */
  background-image: linear-gradient(to right,
                                      blue,
                                      blue 50%,
                                      transparent 80%,
                                      transparent);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .2s ease-in;
    width: 100%;
  a {
    text-decoration: none;
    ${'' /* color: ${props => props.theme.white}; */}
  }
  @media (max-width: 693px) {
    padding: 0.1333em;
    margin: 0;
  }

  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
  }
  &:hover {
   padding-left: 1em;
   ${'' /* color: ${props => props.theme.black}; */}
   background-position: 0 0;
   cursor: pointer;
    a {
      ${'' /* color: ${props => props.theme.black}; */}
    }
     &:before {
     visibility: visible;
     -webkit-transform: scaleX(1);
     transform: scaleX(1);
    }
  }

  @-webkit-keyframes Gradient {
    0% {background-position: 0% 50%}
    50% {background-position: 100% 50%}
    100% {background-position: 0% 50%}
  }

  @-moz-keyframes Gradient {
    0% {background-position: 0% 50% }
    50% {background-position: 100% 50% }
    100% {background-position: 0% 50% }
  }

  @keyframes Gradient {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`

const mapStateToProps = state => {
  return { state }
}

const Lol = styled.div`
  background: ${props => props.theme.black};
  height: 20px;
  width: 20px;
`

const Navigation = ({state}) => (
  <NavComp className='Nav'>
    <PaddingMobile>
      <Lol />
      <Link to='/' exact>
        <Logo src={logo} />
      </Link>

      <NavMenu className='Menu'>
        <Link to='/about/'><NavItem>About.i</NavItem></Link>
        <Link to='/me/'><NavItem>Me.href</NavItem></Link>
        <Link to='/counter'>COUNTER</Link>
        <h5>
          Current Count: {state}
        </h5>
        <Link to='/mycomputer/'><NavItem>Projects</NavItem></Link>
        <a onClick={() => this.handlePopUp()}><NavItem>Cv.dmg</NavItem></a>
      </NavMenu>
      <EmojiToggle />
    </PaddingMobile>
  </NavComp>
)

export default connect(mapStateToProps)(Navigation)
