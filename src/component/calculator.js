import React, {Component} from "react";
import Display from "./display";
import ButtonPanel from "./button-panel";
import styled from "styled-components";
import { create, all } from "mathjs";


const math = create(all);

math.config({
  number: "BigNumber", // Default type of number:
  // 'number' (default), 'BigNumber', or 'Fraction'
  precision: 64 // Number of significant digits for BigNumbers
});

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 410px;
  width: 240px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
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
