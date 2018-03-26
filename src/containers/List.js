import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { setGreeting } from "../actions";

const Box = styled.div`
  padding: 10px;
  height: 100%;
`;

const BorderBox = styled.div`
  border: blue 1px solid;
  height: 100%;
`;

const Table = styled.table`
  width: 100%;
  td,
  th {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  tr:last-child {
    td {
      border-bottom: none;
    }
  }

  tbody {
    tr {
      cursor: pointer;
      transition: transform 0.1s ease-in;
    }
    tr:hover {
      transform: scale(1.01);
    }
  }
`;

const transformToBirthday = date =>
  date
    .split("-")
    .reverse()
    .join("/");

const List = ({ list, setGreeting, translations }) => (
  <Box>
    <BorderBox>
      <Table>
        <thead>
          <tr>
            <th>{translations.name}</th>
            <th>{translations.country}</th>
            <th>{translations.birthday}</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i} onClick={ev => setGreeting(list[i])}>
              <td>{item.name}</td>
              <td>{item.country}</td>
              <td>{transformToBirthday(item.birthday)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </BorderBox>
  </Box>
);

const mapStateToProp = ({ list, translations }) => ({ list, translations });
const mapDispatchTopProp = dispatch => ({
  setGreeting: greeting => dispatch(setGreeting(greeting))
});

export default connect(mapStateToProp, mapDispatchTopProp)(List);
