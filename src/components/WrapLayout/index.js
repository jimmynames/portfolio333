import styled from 'react-emotion'

export const WrapLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
  ${'' /* background: ${props => props.theme.black}; */}
  @media (max-width: 693px) {
    flex-direction: column;
  }

  @media (min-width: ) {
    min-width: 1200px;
  }
`
