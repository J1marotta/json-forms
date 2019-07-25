import * as React from 'react'
import styled from 'styled-components'

const Sdiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid black;
  padding: 10px;
`

const Sinput = styled.input`
  padding: 10px;
  margin: 6px;
  border-radius: 5%;
`
const Slabel = styled.label`
  font-weight: 500;
  padding: 1px;
  text-transform: capitalize;
`



const pattern = `/(\\w.+\\s).+/i`



const Input = 
({   
  title
  , required
  , type
  , onChange
  , values
  , name
}) => (
  <Sdiv>
    <Slabel htmlFor={name}>{title}</Slabel>
    <Sinput
      type={type}
      name={name}
      required={required}
      onChange={onChange}
      value={values[name]}
      pattern={name === 'name' ? pattern : null }
    />
  </Sdiv>
)






export default Input
