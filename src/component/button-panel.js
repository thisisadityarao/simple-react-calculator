import React from "react";
import CalculatorButton from "./button";
import styled from "styled-components";

const PanelWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonRow = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
`;


const ButtonPanel = ({handleClick}) => {

  return (
    <PanelWrapper>
      <ButtonRow>
        <CalculatorButton handleClick={handleClick}>AC</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>+/-</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>%</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>/</CalculatorButton>
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton handleClick={handleClick}>7</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>8</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>9</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>*</CalculatorButton>
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton handleClick={handleClick}>4</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>5</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>6</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>-</CalculatorButton>
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton handleClick={handleClick}>1</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>2</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>3</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>+</CalculatorButton>
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton handleClick={handleClick} wide>
          0
        </CalculatorButton>
        <CalculatorButton handleClick={handleClick}>.</CalculatorButton>
        <CalculatorButton handleClick={handleClick}>=</CalculatorButton>
      </ButtonRow>
    </PanelWrapper>
  );
};

export default ButtonPanel;
