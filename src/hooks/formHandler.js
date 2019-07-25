import { useState } from 'react'

const useFormHandler = (initialState, callback) => {
  const [values, setValues] = useState(initialState)

  const handleSubmit = e => {
    if (e) e.preventDefault()
    callback(values)
  }

  const handleChange = ({ target: { name, value }}) => {
    setValues(values => ({...values, [name]: value }))
  }
    
    return {
      handleChange,
      handleSubmit,
      values,
    } 
}


export default useFormHandler