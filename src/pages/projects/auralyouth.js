import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import {H1} from './../../components/HTML/H1'
import {P} from './../../components/HTML/P'

import ProjectImageComp from './../../components/ProjectImage'
import CTABannerComp from './../../components/CTABanner'

import ay1 from './../../images/projects/auralyouth/ay1.png'
import ay2 from './../../images/projects/auralyouth/ay2.png'
import ay3 from './../../images/projects/auralyouth/ay3.png'

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

export default class AuralYouthPage extends React.Component {
  render () {
    return (
      <Page theme={this.props.theme}>
        <Intro>
          <H1case>Aural Youth</H1case>
          <Pcase>Freelance project</Pcase>
          <Pcase>Built using Gatsby.js, Styled-components & React.js</Pcase>
          <Pcase>Designed by <a href='https://www.linkedin.com/in/simone-ludeman-342042b3/' rel='noopener' target='_blank'>Simone Ludderman</a></Pcase>
        </Intro>

        <ProjectImageComp src={ay1} />
        <ProjectImageComp src={ay2} />
        <ProjectImageComp src={ay3} />

        <CTABannerComp codelink='https://github.com/jimmynames/auralYouth' weblink='https://auralyouth.co.uk' />

      </Page>
    )
  }
}
