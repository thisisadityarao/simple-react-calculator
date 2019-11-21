import React from "react";
import styled, {css} from "styled-components";

const Button = styled.button`
  background: #e8e8e8;
  outline: 1px solid #f2f2f2;
  padding: 0;
  cursor: pointer;
  width: 60px;
  flex: 1;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  border: 0;

  ${props =>
    props.wide &&
    css`
      width: 120px;
      flex: 2;
    `}

    &:hover {
      background: #fff;
    }
`;

const CalculatorButton = ({wide, name, children, handleClick}) => {
  return (
    <>
      <Button
        wide={wide}
        name={name}
        onClick={e => handleClick(children)}
      >
        {children}
      </Button>
    </>
  );
};

export default CalculatorButton;
