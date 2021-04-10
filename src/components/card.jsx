import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  margin: 1rem;
  width: 100%;
  background-color: grey;
  .inner-text {
    color: ${({ innerColor }) => innerColor};
  }
  &:hover .inner-text {
    color: pink;
  }
`

const Card = ({ innerColor }) => {
  return (
    <CardContainer innerColor={innerColor}>
      Test
      <div className="inner-text">
        Test 1
      </div>
    </CardContainer>
  )
}

export default Card;