import React from 'react'
import styled from 'react-emotion'
import 'animate.css/animate.min.css'

import {H1} from './../../components/HTML/H1'
import {P} from './../../components/HTML/P'

import {HoverAdjustments} from './../../components/HoverAdjustments'

import ProjectImageComp from './../../components/ProjectImage'
import CTABannerComp from './../../components/CTABanner'

import mg1 from './../../images/projects/250/mg1.png'
import mg2 from './../../images/projects/250/mg2.png'

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
    ${({theme}) => HoverAdjustments(theme)}
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

export default class MG250 extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <H1case>250mg</H1case>
          <Pcase>Charcoal Face Mask Project</Pcase>
          <Pcase>Built and conceptualised with <a href='https://twitter.com/senso_info' rel='noopener' target='_blank'>Senso36</a> to provide random[i]zed ambient visuals overlaying random[i]zed ambient mixes</Pcase>
          <Pcase>React Boilerplate, React.js, Styled-components</Pcase>
        </Intro>

        <ProjectImageComp src={mg1} />

        <ProjectImageComp src={mg2} />


        <CTABannerComp codelink='https://github.com/thompson-mcdonald/250mg/' weblink='http://250mg.site' />

      </Page>
    )
  }
}
