import React from "react";
import Calculator from "./calculator";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3f51b5;
`;

const MainComponent = () => {
  return (
    <Main>
      <Calculator />
    </Main>
  );
};

export default MainComponent;
