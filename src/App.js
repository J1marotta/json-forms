import React from 'react';
import Form from './components/form'
import Preview from './components/statePreview'
import schema from './schema/dataSet'


function App() {
  return (
    <div>
      <Form 
        schema={schema}
      />



    </div>
  );
}

export default App;
