import * as React from 'react'
import styled from 'styled-components'

const Sgrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 200px;
  height: 200px;
  background-color: #FAFAFA;
  overflow: scroll;
`

const Preview = values => 
  <Sgrid>
    <div>
      {JSON.stringify(values,null,2)}
    </div>
  </Sgrid>

export default Preview