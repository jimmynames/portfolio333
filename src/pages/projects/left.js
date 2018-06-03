import React from 'react'
import styled from 'styled-components'
import 'animate.css/animate.min.css'

import {H1} from './../../components/HTML/H1'
import {P} from './../../components/HTML/P'

import ProjectImageComp from './../../components/ProjectImage'
import CTABannerComp from './../../components/CTABanner'

import le1 from './../../images/projects/left/le1.png'

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

export default class LeftPage extends React.Component {
  render () {
    return (
      <Page theme={this.props.theme}>
        <Intro>
          <H1>LEFT</H1>
          <Pcase>Geek Night Project</Pcase>
          <Pcase>Designed & Built to promote m8s release/soundcloud</Pcase>
          <Pcase>And generally to play with :pseudo css, this 3d cube and soundcloud import</Pcase>
        </Intro>

        <ProjectImageComp src={le1} />

        <CTABannerComp weblink='https://jimmynames.github.io/LEFT/' />

      </Page>
    )
  }
}
