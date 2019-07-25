import React  from 'react'
import { Input } from './Input'
import useFormHandler from '../hooks/formHandler'


const css = 
{
  page: b` 
      display: grid;
      grid-template-columns: 1fr;
      height: 100%;
      width: 100%;
      overflow: hidden;
      padding: 20px;
      background-image: 
        linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    `.class
    
 , form: b`
      display: grid;
      width: 60vw;
      height: 100%;
      justify-self: center;
      row-gap: 20px;
    `.class

  , submit: b`
      padding: 10px;
      margin: 6px;
      border-radius: 5%;
  `.class 
}



 





 





const App = ({ data }) =>  {
  const results = values => console.log(values)
  const { values , handleChange, handleSubmit } = useFormHandler(json, results)
 
  return (

      <button className={css.submit} type="submit" >Log it</button>
    </form>
  </div>
  )
}

ReactDOM.render(
	<App data={json} />
, app)