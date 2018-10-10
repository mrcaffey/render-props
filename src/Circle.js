import React from 'react'
import styled, { keyframes } from 'styled-components'

const Div = styled.div `
      position: absolute;
      height: 50px;
      width: 50px;
      top: data.y - 100,
      left: data.x - 100,
      border: solid 1 px black
      `

const Circle = ({ data }) => (
  <div
    style={{
      borderRadius: '100%',
      position: 'absolute',
      height: '50px',
      width: '50px',
      top: data.y - 100,
      left: data.x - 100,
      border: 'solid 1 px black'
    }}
    >
      {data.x}, {data.y}
    </div>
)

export default Circle