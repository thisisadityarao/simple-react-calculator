import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 80px;
  width: 100%;
  background: #ffbf00;
  text-align: center;
`;

const Heading = styled.h1`
  padding-top: 20px;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Heading>React Calculator</Heading>
    </Header>
  );
};

export default HeaderComponent;
