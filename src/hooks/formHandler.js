import { useState } from 'react'

const useFormHandler = (initialState, callback) => {


  const [values, setValues] = useState(initialState)

  const handleSubmit = e => {
    if (e) e.preventDefault()
    callback(values)
  }

  
  const handleChange = e =>  {
    e.persist()

    const value =  e.target.type === 'checkbox' 
      ? e.target.checked 
      : e.target.value

    
    const path = e.target.name.split('.')


    const assoc = (key, value, target) => {
        target[key] = value
        return target
    }

    const assocPath = (path, value, src) => {
      const key = path.slice(-1)[0]
      const target = path.slice(0, -1)
        .reduce(
          (p,k) => p[k] = p[k] || {}, src
        )

      assoc(key, value, target)
      return src
    }
    

    // mix our old values with the new values
    setValues(values => 
      Object.assign(
        {},
          {
            ...values,
            ...assocPath(path, value, values)
          }
      )
    )
  }
    
    return {
      handleChange,
      handleSubmit,
      values,
    } 
}


export default useFormHandler