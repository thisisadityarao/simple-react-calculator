import React from "react";
import styled from "styled-components";

const Screen = styled.div`
  text-align: right;
  width: 100%;
  height: 70px;
  background: rgb(255, 255, 255);
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 1.4rem;
`;

const Display = (props) => {
return <Screen>{props.input}</Screen>;
};

export default Display;