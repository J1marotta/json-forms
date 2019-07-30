import * as React from 'react'
import styled from 'styled-components'

const Sgrid = styled.div`
  display: grid
  grid-template-columns: minmax(0,1fr);
  width: 100%;
  overflow: scroll;
  text-align: center;
  
  height: 200px;
  max-width: 500px;
  background-color: #e3e3e3;

  @media(min-width: 750px) {
    min-width: 700px;  
    max-width: 100%;
  }
`

const Preview = values => 
  <Sgrid>
      {JSON.stringify(values, null , 4) }
  </Sgrid>

export default Preview