import * as React from "react";
import styled from "styled-components";

// I really hate naming stuff.
const Sdiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;
`;
const Sinput = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 2%;
  width: 100%;
`;
const Select = styled.select`
  padding: 10px;
  margin: 6px;
  border-radius: 5%;
`;

const Slabel = styled.label`
  font-weight: 500;
  padding: 1px;
  text-transform: capitalize;
  justify-self: baseline;
`;

const rawInput = ({
  type,
  name,
  required,
  onChange,
  values,
  title,
  min,
  max,
  hidden
}) =>
  !hidden && (
    <Sinput
      type={type}
      id={name}
      name={name}
      required={required}
      onChange={onChange}
      value={values[name]}
      autoFocus={title === "Name" ? true : false}
      min={min}
      max={max}
    />
  );

const rawSelect = ({ options, name, onChange, values }) => (
  <Select name={name} id={name} onChange={onChange} value={values[name]}>
    {options.map((o, i) => (
      <option key={o.value + i} value={o.value}>
        {o.name}
      </option>
    ))}
    }
  </Select>
);

const handledob = ({ required, type, onChange, values, name, min, max }) => (
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
      disabled={values.guardian.required}
    />

    {/* start of non-dynamic section because we are expecting dates to be used for dob */}

    <Slabel htmlFor={"guardian.required"}>I'm under 18.</Slabel>
    <Sinput
      type={"checkbox"}
      id={"guardian.required"}
      name={"guardian.required"}
      onClick={onChange}
      value={values.guardian.required}
    />

    {values.guardian.required && (
      <React.Fragment>
        <Slabel htmlFor={"guardian.name"}>Guardian's Name</Slabel>
        <Sinput
          type={"text"}
          id={"guardian.name"}
          name={"guardian.name"}
          onChange={onChange}
          value={values.guardian.name}
        />

        <Slabel htmlFor={"guardian.contact"}>Guardian's Mobile</Slabel>
        <Sinput
          type={"number"}
          id={"guardian.contact"}
          name={"guardian.contact"}
          onChange={onChange}
          value={values.guardian.contact}
        />
      </React.Fragment>
    )}
  </React.Fragment>
);

const handleContactdetails = ({ onChange, values }) => (
  <React.Fragment>
    <Slabel htmlFor={"contact.mobile"}>Mobile</Slabel>
    <Sinput
      type={"checkbox"}
      id={"contact.mobile"}
      name={"contact.mobile"}
      onClick={onChange}
      value={values.contact.mobile}
    />

    {values.contact.mobile && (
      <React.Fragment>
        <Slabel htmlFor={"contact.mobileNumber"}>Number</Slabel>
        <Sinput
          type={"number"}
          id={"contact.mobileNumber"}
          name={"contact.mobileNumber"}
          onChange={onChange}
          value={values.contact.mobileNumber}
        />
      </React.Fragment>
    )}

    <Slabel htmlFor={"contact.home"}>Home</Slabel>
    <Sinput
      type={"checkbox"}
      id={"contact.home"}
      name={"contact.home"}
      onClick={onChange}
      value={values.contact.home}
    />

    {values.contact.home && (
      <React.Fragment>
        <Slabel htmlFor={"contact.homeNumber"}>Number</Slabel>
        <Sinput
          type={"number"}
          id={"contact.homeNumber"}
          name={"contact.homeNumber"}
          onChange={onChange}
          value={values.contact.homeNumber}
        />
      </React.Fragment>
    )}
  </React.Fragment>
);

const whichInput = ({
  title,
  required,
  type,
  onChange,
  values,
  name,
  options,
  min,
  max,
  prefix
}) =>
  ({
    text: () =>
      rawInput({
        title,
        required,
        type,
        onChange,
        values,
        name
      }),
    select: () =>
      rawSelect({
        options,
        name,
        onChange,
        values
      }),
    number: () =>
      handleContactdetails({
        required,
        type,
        onChange,
        values,
        name,
        prefix
      }),
    checkbox: () =>
      rawInput({
        title,
        required,
        type,
        onChange,
        values,
        name
      }),
    date: () =>
      handledob({
        title,
        required,
        type,
        onChange,
        values,
        name,
        options,
        min,
        max
      })
  }[type || "text"]());

const Input = ({
  title,
  required,
  type,
  onChange,
  values,
  name,
  options,
  min,
  max,
  prefix,
  hidden
}) =>
  !hidden && (
    <Sdiv key={name}>
      <Slabel htmlFor={name}>{title}</Slabel>
      {whichInput({
        title,
        required,
        type,
        onChange,
        values,
        name,
        options,
        min,
        max,
        prefix
      })}
    </Sdiv>
  );

export default Input;
