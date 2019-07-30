import * as React from 'react'
import styled from 'styled-components'


const Sdiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;

  @media(min-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }  
`

const Sinput = styled.input`
  padding: 10px;
  margin: 6px;
  border-radius: 5%;
`
const Select = styled.select`
  padding: 10px;
  margin: 6px;
  border-radius: 5%;
`

const Slabel = styled.label`
  font-weight: 500;
  padding: 1px;
  text-transform: capitalize;
`

// input has to handle too much work => dob and contacts
const rawInput = 
({
    type
  , name
  , required
  , onChange
  , values
  , title
  , min
  , max
}) => (
  <Sinput
    type={type}
    id={name}
    name={name}
    required={required}
    onChange={onChange}
    value={values[name]}
    autoFocus={title === 'Name' ? true : false} 
    min={min}
    max={max}
  />
)


const rawSelect = 
({
   options
  , name
  , onChange
  , values
}) => (
  <Select
    name={name}
    id={name}
    onChange={onChange}
    value={values[name]}
  >
    {options.map( (o,i) => 
      <option 
        key={o.value+i} 
        value={o.value}>{o.name}
      </option>  
    )}}    
  </Select>
)


const handledob = ({
    title
    , required
    , type
    , onChange
    , values
    , name
    , options
    , min
    , max
}) => (
  <React.Fragment>

  <Sinput
    type={type}
    id={name}
    name={name}
    required={required}
    onChange={onChange}
    value={values[name]}
    min={min}
    max={max}
    disabled={values['guardianConsent']}
    /> 

   
  <Slabel htmlFor={'guardianConsent'}>I'm under 18.</Slabel>
  <Sinput
    type={'checkbox'}
    id={'guardianConsent'}
    name={'guardianConsent'}
    onClick={onChange}
    value={
      values[name]['guardianConsent']}
  /> 
  { values['guardianConsent'] && (
    <React.Fragment>
    
      <Slabel htmlFor={'guardianName'}>Guardian's Name</Slabel>
        <Sinput
          type={'text'}
          id={'guardianName'}
          name={'guardianName'}
          onChange={onChange}
          value={values.dob.guardianName}
          />

      <Slabel htmlFor={'guardianContact'}>Guardian's Mobile</Slabel>
        <Sinput
          type={'tel'}
          id={'guardianContact'}
          name={'guardianContact'}
          onChange={onChange}
          value={values.dob.guardianContact}
          />
    
    </React.Fragment>
  )}

  </React.Fragment>
  
)


const whichInput = ({
    title
  , required
  , type
  , onChange
  , values
  , name
  , options
  , min
  , max
  , prefix

}) => ({
  'text': () =>   
    rawInput({
      title
      , required
      , type
      , onChange
      , values
      , name
    })
  ,
  'select': () => rawSelect({
    options
    , name
    , onChange
    , values
    })
  ,
  'tel':  () => rawInput({
      required
    , type
    , onChange
    , values
    , name
    , prefix
  })
  , 
  'checkbox': () => rawInput({
    title
    , required
    , type
    , onChange
    , values
    , name
  })
  ,
  'date': () => handledob({
    title
    , required
    , type
    , onChange
    , values
    , name
    , options
    , min
    , max
  })
}[type || 'text']())




const Input = 
({   
  title
  , required
  , type
  , onChange
  , values
  , name
  , options
  , min
  , max
  , prefix
}) => (
  <Sdiv key={name}>
    <Slabel htmlFor={name}>{title}</Slabel>
    {  
      whichInput({
        title
        , required
        , type
        , onChange
        , values
        , name
        , options
        , min
        , max
        , prefix
      })
    }
  </Sdiv>
)



export default Input
