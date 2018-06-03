import React from 'react'
import styled from 'styled-components'

import 'animate.css/animate.min.css'

import {H1} from './../../components/HTML/H1'
import {P} from './../../components/HTML/P'

import CTABannerComp from './../../components/CTABanner'
import ProjectImageComp from './../../components/ProjectImage'

import cp1 from './../../images/projects/codepen/cp1.png'
import cp2 from './../../images/projects/codepen/cp2.png'
import cp3 from './../../images/projects/codepen/cp3.png'
import cp4 from './../../images/projects/codepen/cp4.png'
import cp5 from './../../images/projects/codepen/cp5.png'

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

export default class CodepenPage extends React.Component {
  render () {
    return (
      <Page >
        <Intro>
          <H1case>Codepen</H1case>
          <Pcase>Yung Jim Projects</Pcase>
          <Pcase>Projects built early into learning code back in 2015</Pcase>
          <Pcase>Javascript, Sass, SVG</Pcase>
        </Intro>

        <ProjectImageComp src={cp1} />
        <ProjectImageComp src={cp2} />
        <ProjectImageComp src={cp3} />
        <ProjectImageComp src={cp4} />
        <ProjectImageComp src={cp5} />

        <CTABannerComp weblink='https://codepen.io/Jimmynames/' />

      </Page>
    )
  }
}
