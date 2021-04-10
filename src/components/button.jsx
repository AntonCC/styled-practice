import React from 'react'
import styled, { css, keyframes } from 'styled-components'

// const StyledButton = styled.button`
//   padding: 1rem 1.5rem;
//   font-size: 1.8rem;
//   color: ${({ primary }) => primary ? 'red' : '#fff'};
//   outline: none;
//   border: none;
//   margin-bottom: 1rem;
//   background: #333;
//   ${({ primary }) => 
//     primary &&
//       css`
//         color: red;
//         background-color: ${({ bgColor }) => bgColor};
//       `
//   }
// `

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const StyledButton = styled.button`
  /* background-color: white; */
  background-color: ${({ bgColor }) => bgColor};
  color: ${(props) => props.theme.colors.main};
  font-size: 1.2rem;
  margin: 1rem;
  padding: .5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2s ${fadeIn} ease-in;

  ${({ primary }) => 
    primary && 
      css`
        background-color: palevioletred;
        color: white;
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
      `}
  
  &:hover {
    color: white;
    background-color: palevioletred;
  }
`

const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`

const Button = ({ primary, bgColor, children }) => {
  return (
    <StyledButton primary={primary} bgColor={bgColor}>
      {children}
    </StyledButton>
  )
}

export default Button;