import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import Title from "../components/Title";
import Form from "./Form";
import List from "./List";
import Greeting from "./Greeting";

const App = props => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Title>Intive - FDV Exercise</Title>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Form />
        <Greeting />
      </Col>
      <Col md={6}>
        <List />
      </Col>
    </Row>
    <Row end="xs">
      <Col>Marco Scarciofolo</Col>
    </Row>
  </Grid>
);

export default App;
