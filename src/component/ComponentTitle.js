import React from 'react'
import styled from 'styled-components'

function ComponentTitle({name, title}) {
  return (
    <div className="container">
      <H2style>
  <span className=" name ">{name}</span>
      </H2style>
    </div>
  )
}

const H2style = styled.h2`

margin:1em auto;
width 80%;
font-size:3em;

.name{
  color:var(--mainblue);
  font-weight:bolder;
  font-style:italic;
}
`;

export default ComponentTitle
