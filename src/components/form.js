import React from "react";
import styled from "styled-components";
import Input from "./Input";
import useFormHandler from "../hooks/formHandler";
import Preview from "./statePreview";

const Sbutton = styled.button`
  padding: 10px;
  margin: 6px;
  border-radius: 2%;

  @media (min-width: 750px) {
    justify-self: center;
  }
`;

const Header = styled.h2`
  color: white;
  padding: 20px;
  border: 2px solid white;
`;

const Fdiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  width: 90%;

  @media (min-width: 750px) {
    width: 60%;
  }
`;

const Form = ({ schema }) => {
  const results = values => console.log(values);

  const blankformData = Object.keys(schema).reduce((p, n) => {
    p[n] = "";
    return p;
  }, {});

  const { values, handleChange, handleSubmit } = useFormHandler(
    blankformData,
    results
  );

  return (
    <form onSubmit={handleSubmit}>
      <React.Fragment>
        <Fdiv>
          {Object.entries(schema).map(([name, data]) => (
            <Input
              key={name}
              name={name}
              {...data}
              values={values}
              onChange={handleChange}
            />
          ))}
          <Sbutton type="submit">Log it</Sbutton>
        </Fdiv>

        <div>
          <Header>Current State</Header>
          <Preview values={values} />
        </div>
      </React.Fragment>
    </form>
  );
};

export default Form;
