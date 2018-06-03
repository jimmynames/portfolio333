import styled from 'react-emotion'

export const A = styled.a`
  color: ${props => props.theme.white};

  &:hover {
    color: ${props => props.theme.black};
  }
`
