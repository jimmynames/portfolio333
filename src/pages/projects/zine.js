import React from 'react'
import styled from 'react-emotion'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import {H1} from './../../components/HTML/H1'
import {P} from './../../components/HTML/P'

import ProjectImageComp from './../../components/ProjectImage'
import CTABannerComp from './../../components/CTABanner'

import ay1 from './../../images/projects/zine/jb1.png'
import ay2 from './../../images/projects/zine/jb2.png'
import ay3 from './../../images/projects/zine/jb3.png'

const Page = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0.75rem;
`

const Intro = styled.div`
  width: 50%;
  @media (max-width: 693px) {
    width: 100%;
  }
`

const H1case = styled(H1)`
  margin-top: 0;
`

const Pcase = styled(P)`
a{
  position: relative;
  color: ${props => props.theme.white};
  text-decoration: none;
  padding: 5px;
  z-index: 2;
  &:after {
    position: absolute;
    content: '';
    height: 2px;
    bottom: -4px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: blue;
    transition: 0.5s;
  }

  &:hover {
    color: ${props => props.theme.white};
    z-index: 666;
    &:after {
      height: 100%;
      bottom: 0;
      z-index: -1;
    }
  }
}
`

const ImageContainer = styled.section`
  height: 100%;
  width: 100%;
  margin: 30px 0;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  img {
    height: 90%;
    width: 100%;
  }
`

const Outro = styled.section`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
align-content: center;

a {
  text-decoration: none;
  padding: 1em 1.5em;
  background: blue;
  min-width: 136.66px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 2px solid black;
  margin: 0.666em;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: white;
    color: blue;
    border: 2px solid blue;
    cursor: pointer;
  }
}
`

export default class JimmysBongoLifestyleBlog extends React.Component {
  render () {
    return (
      <Page theme={this.props.theme}>
        <Intro>
          <H1case>Jimmy's Bongo Lifestyle Blog </H1case>
          <Pcase>Personal project</Pcase>
          <Pcase>2016</Pcase>
        </Intro>

        <ProjectImageComp src={ay1} />
        <ProjectImageComp src={ay2} />
        <ProjectImageComp src={ay3} />

        <CTABannerComp weblink='https://jimmynames.github.io/BongoLifestyle/' />

      </Page>
    )
  }
}
