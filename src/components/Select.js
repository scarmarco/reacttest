import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  border: blue 1px solid;
  height: 24px;
  border-radius: 0;
  border: 0;
  outline: 1px solid blue;
  outline-offset: -1px;
  width: 140px;
`;

const Select = ({ placeholder, options = [], ...props }) => (
  <StyledSelect {...props}>
    <option disabled selected>
      {placeholder}
    </option>
    {options.map(({ name }) => (
      <option key={name} value={name}>
        {name}
      </option>
    ))}
  </StyledSelect>
);

export default Select;
