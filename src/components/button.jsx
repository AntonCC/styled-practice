import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: ${({ primary }) => primary ? 'red' : '#fff'};
  outline: none;
  border: none;
  margin-bottom: 1rem;
  background: #333;
  ${({ primary }) => 
    primary &&
      css`
        color: red;
        background-color: ${({ bgColor }) => bgColor};
      `
  }
`

const Button = ({ primary, bgColor, children }) => {
  return (
    <StyledButton primary={primary} bgColor={bgColor}>
      {children}
    </StyledButton>
  )
}

export default Button;