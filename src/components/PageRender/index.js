import styled from 'react-emotion'

export const PageRender = styled.div`
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
