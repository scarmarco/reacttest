import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

const Container = styled(Row)`
  padding: 10px;
`;

const Label = styled.span`
  color: blue;
`;

const Field = ({ label, children }) => (
  <Container middle="xs" around="xs">
    <Col xs={3}>{label ? <Label>{label}:</Label> : null}</Col>
    <Col xs={4}>{children}</Col>
  </Container>
);

export default Field;
