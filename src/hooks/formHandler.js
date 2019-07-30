import { useState } from 'react'

const useFormHandler = (initialState, callback) => {


  const [values, setValues] = useState(initialState)

  const handleSubmit = e => {
    if (e) e.preventDefault()
    callback(values)
  }

  // { name, value, checked }
  const handleChange = e =>  {
    e.persist()

    const value = e.target.type === 'checkbox' 
    ? e.target.checked 
    : e.target.value

    setValues(values => ({...values, [e.target.name]: value }))
  }
    
    return {
      handleChange,
      handleSubmit,
      values,
    } 
}


export default useFormHandler