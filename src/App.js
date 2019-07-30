import React from 'react';
import styled from 'styled-components'
import Form from './components/form'
import schema from './schema/dataSet'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  background-image: linear-gradient(#4286f4, #373b44);
`



function App() {
  return (
    <Layout>
      <Form 
        schema={schema}
      />
    </Layout>
  );
}

export default App;
