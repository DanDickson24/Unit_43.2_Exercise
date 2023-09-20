// Calculator.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Calculator = () => {
  const { num1, num2 } = useParams();

  const parseNumber = (value) => {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
  };

  const number1 = parseNumber(num1);
  const number2 = parseNumber(num2);

  const calculateResult = () => {
    const path = window.location.pathname;
    const operation = path.split('/')[1];

    switch (operation) {
      case 'add':
        return number1 + number2;
      case 'subtract':
        return number1 - number2;
      case 'multiply':
        return number1 * number2;
      case 'divide':
        return number1 / number2;
      default:
        return 'Invalid operation';
    }
  };

  const result = calculateResult();

  return (
    <div>
      <h2>Result:</h2>
      <p>{result}</p>
    </div>
  );
};

export default Calculator;
