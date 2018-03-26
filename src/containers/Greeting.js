import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Box = styled.div`
  background: lightgreen;
`;

const Greeting = ({ greeting, translations }) => {
  if (greeting) {
    const { name, country } = greeting;
    const birthday = greeting.birthday.split("-");
    const { day, month, years } = {
      day: birthday[2],
      month: translations.MONTH_NAMES[birthday[1] - 1],
      years: new Date().getFullYear() - birthday[0]
    };
    return (
      <Box>
        <p>{`${translations.hello} ${name} ${translations.from} ${country} ${
          translations.on
        } ${day} ${translations.of} ${month} ${
          translations.you_will_have
        } ${years} `}</p>
      </Box>
    );
  }
  return null;
};

const mapStateToProp = ({ greeting, translations }) => ({
  greeting,
  translations
});

export default connect(mapStateToProp)(Greeting);
