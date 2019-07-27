import React  from 'react'
import styled from 'styled-components'
import Input from './Input'
import useFormHandler from '../hooks/formHandler'

const Sbutton = styled.button`
  padding: 10px;
  margin: 6px;
  border-radius: 5%;
`
// const css = 
// {
//   page: b` 
//       display: grid;
//       grid-template-columns: 1fr;
//       height: 100%;
//       width: 100%;
//       overflow: hidden;
//       padding: 20px;
//       background-image: 
//         linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
//     `.class
    
//  , form: b`
//       display: grid;
//       width: 60vw;
//       height: 100%;
//       justify-self: center;
//       row-gap: 20px;
//     `.class

// }



 





const Form = ({ schema }) =>  {
  const results = values => console.log(values)
  const { values , handleChange, handleSubmit } = useFormHandler({}, results)
 
 
  return (
    <div> 
        <div>
              {Object.entries(schema).map( ([field, data ]) =>
                  <Input {...data} values={values} onChange={handleChange} />
              )}
        </div>


      <div>
        <Sbutton onSubmit={handleSubmit} type="submit" >Log it</Sbutton>
      </div>
  </div>
  )
} 


export default Form