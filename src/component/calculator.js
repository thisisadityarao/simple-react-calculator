import React, {Component} from "react";
import Display from "./display";
import ButtonPanel from "./button-panel";
import styled from "styled-components";
import * as math from "mathjs";

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 410px;
  width: 240px;
  border: 1px solid #fff;
  border-radius: 5px;
`;

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  calculate = () => {
    this.setState({ input: math.evaluate(this.state.input).toString()});
  }

  reset = () => {
    this.setState({ input: "" });
  };

  decimal = (button) => {
    this.setState(() => {
        if (this.state.input !== "") {
          return { input: this.state.input + button };
        } else {
          return "";
        }
      }
    )
  };

  negative = () => {
    this.setState(() => {
          if (this.state.input !== "") {
            return {input : this.state.input};
          } else {
            return { input: "-" + this.state.input };
          }
        }
      );
    };

    buttonClick = button => {
        if (button === "=") {
            this.calculate();
        } else if (button === "AC") {
            this.reset();
        } else if (button === ".") {
            this.decimal(button);
        } else if (button === "+/-") {
            this.negative();
        } else {
            this.setState(() => {
              return {input: this.state.input + button}
        });
      }
    };

    render() {
      return (
        <CalculatorWrapper>
          <Display input={this.state.input} />
          <ButtonPanel handleClick={this.buttonClick} />
        </CalculatorWrapper>
      );
}
};

export default Calculator;
