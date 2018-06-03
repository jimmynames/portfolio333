import React from 'react'
import styled from 'react-emotion'

const Slideshow = styled.div`
  position: relative;
  overflow: hidden;
  height: 50px;
`

const SlideshowContent = styled.p`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 17666px;
  animation: moveSlideshow 196.6s linear infinite;
  margin: 0;
  line-height: 50px;
  font-size: 46px;
  font-family: 'Open Sans Condensed', sans-serif;
  opacity: 0.1;
  transform: translate3d(0, 0, 0);
  ${'' /* @keyframes slideshow {
    0%    { left: 0; }
    100%  { left: -200%; }
  } */}

  @keyframes moveSlideshow {
  100% {
    -webkit-transform: translateX(-200%);
  }
}
`

export default class SlideshowComp extends React.Component {
  render () {
    return (
      // <SlideshowAbsolute>
      <Slideshow>
        <SlideshowContent>Welcome to my website, please enjoy your stay.. HTML
            CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
            Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
            Welcome to my website, please enjoy your stay.. HTML
              CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
              Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
              Welcome to my website, please enjoy your stay.. HTML
                CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
        </SlideshowContent>
      </Slideshow>
      // </SlideshowAbsolute>
    )
  }
}
