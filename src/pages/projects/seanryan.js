import React from 'react'
import styled from 'styled-components'
import 'animate.css/animate.min.css'

import {H1} from './../../components/HTML/H1'
import {P} from './../../components/HTML/P'

import ProjectImageComp from './../../components/ProjectImage'
import CTABannerComp from './../../components/CTABanner'

import spr1 from './../../images/projects/srdesign/spr1.png'
import spr2 from './../../images/projects/srdesign/spr2.png'

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

export default class SeanRyanDesignPage extends React.Component {
  render () {
    return (
      <Page theme={this.props.theme}>
        <Intro>
          <H1case>Sean Ryan Design Portfolio</H1case>
          <Pcase>Brotherly Love Project</Pcase>
          <Pcase>Built in 1 day 💪🏻 using Gatsby.js, Styled-components & React.js</Pcase>
          <Pcase>Designed by <a href='https://www.youtube.com/watch?v=_Gqwi7Y96sk' rel='noopener' target='_blank'>Ya Boi Names</a></Pcase>
        </Intro>

        <ProjectImageComp src={spr1} />
        <ProjectImageComp src={spr2} />

        <CTABannerComp weblink='https://seanryan.design' codelink='https://github.com/jimmynames/nayrnaes' />

      </Page>
    )
  }
}
