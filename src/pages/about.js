import React from 'react'
import styled from 'react-emotion'

import {H1} from './../components/HTML/H1'
import {H2} from './../components/HTML/H2'
import {H3} from './../components/HTML/H3'
import {H4} from './../components/HTML/H4'
import {A} from './../components/HTML/A'

import {HoverAdjustments} from './../components/HoverAdjustments'

import CubeComp from './../components/Cube'

import logo from './../images/logo.png'

const Page = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0.75rem;
`

const AboutContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 100%;
`

const H3about = styled(H3)`
  margin: 0;
  margin-right: ${props => props.about ? '0.3em' : null};
`

const H1about = styled(H1)`
  margin-top: 0;
`

const H2about = styled(H2)`
  i {
    padding-right: 5px;
    color: ${props => props.theme.white};
  }
`

const H4about = styled(H4)`
`

const Aabout = styled(A)`

`

const VerticalCenterAlign = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  -webkit-margin-before: 0.83em;
  -webkit-margin-after: 0.83em;
  position: relative;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
  }

`

const RuinA = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  color: ${props => props.theme.white};
  ${({theme}) => HoverAdjustments(theme)}
  border: 2px solid ${props => props.theme.black};
  padding-right: 2px;
  transition: all 0.3s ease-in-out;
  img {
    padding-right: 3px;
  }
  @media (max-width: 414px) {
  }
  &:hover {
    background: ${props => props.theme.blue};
    border: 2px solid ${props => props.theme.blue};
  }
`

const RuinLogo = styled.img`
  height: 30px;
  margin: 0;
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <AboutContainer>
          <H1about>My names James but most people call me Jimmy</H1about>
          <H2about>I live on the internet under the alias of 👽<i>Names</i>👔</H2about>
          <VerticalCenterAlign about>
            <H3about about>I'm a Front-end Web Developer and I work at </H3about>
            <RuinA href='https://ruin.studio' target='_blank' rel='noopener'>
              <RuinLogo src={logo} />
              Studio
            </RuinA>
          </VerticalCenterAlign>
          <H4about>I fuck with Css-in-js/Sass/Vanilla Css™, React.js⚛️ & SVGs💖</H4about>
          <CubeComp />
        </AboutContainer>
      </Page>
    )
  }
}
