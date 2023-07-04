import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorContext.js';
import CalculatorButton from './CalculatorButton.js';

const CalculatorButtons = () => {
    const { handleButtonClick } = useContext(CalculatorContext);

    return (
        <div className="calculator-buttons">
            <div className="row">
                <CalculatorButton type="number" value="1" onClick={() => handleButtonClick('1')} />
                <CalculatorButton type="number" value="2" onClick={() => handleButtonClick('2')} />
                <CalculatorButton type="number" value="3" onClick={() => handleButtonClick('3')} />
                <CalculatorButton type="operator" value="4" onClick={() => handleButtonClick('4')} />
                <CalculatorButton type="operator" value="5" onClick={() => handleButtonClick('5')} />
                <CalculatorButton type="operator" value="6" onClick={() => handleButtonClick('6')} />
            </div>
            <div className="row">
                <CalculatorButton type="operator" value="7" onClick={() => handleButtonClick('7')} />
                <CalculatorButton type="operator" value="8" onClick={() => handleButtonClick('8')} />
                <CalculatorButton type="operator" value="9" onClick={() => handleButtonClick('9')} />
                <CalculatorButton type="operator" value="0" onClick={() => handleButtonClick('0')} />
                {/* ... Render more number buttons */}
                <CalculatorButton type="operator" value="+" onClick={() => handleButtonClick('+')} />
                <CalculatorButton type="operator" value="-" onClick={() => handleButtonClick('-')} />
            </div>
            <div className="row">
                <CalculatorButton type="operator" value="*" onClick={() => handleButtonClick('*')} />
                <CalculatorButton type="operator" value="/" onClick={() => handleButtonClick('/')} />
                <CalculatorButton type="operator" value="%" onClick={() => handleButtonClick('%')} />
                <CalculatorButton type="operator" value="^" onClick={() => handleButtonClick('^')} />
                <CalculatorButton type="operator" value="(" onClick={() => handleButtonClick('(')} />
                <CalculatorButton type="operator" value=")" onClick={() => handleButtonClick(')')} />
            </div>
            <div className="row">
                <CalculatorButton type="operator" value="." onClick={() => handleButtonClick('.')} />
                <CalculatorButton type="operator" value="√" onClick={() => handleButtonClick('√')} />
                <CalculatorButton type="operator" value="sin" onClick={() => handleButtonClick('sin')} />
                <CalculatorButton type="operator" value="cos" onClick={() => handleButtonClick('cos')} />
                <CalculatorButton type="operator" value="tan" onClick={() => handleButtonClick('tan')} />
                <CalculatorButton type="operator" value="log" onClick={() => handleButtonClick('log')} />
            </div>
            <div className="row">
                <CalculatorButton type="operator" value="ln" onClick={() => handleButtonClick('ln')} />
                <CalculatorButton type="operator" value="e" onClick={() => handleButtonClick('e')} />
                <CalculatorButton type="operator" value="π" onClick={() => handleButtonClick('π')} />
                <CalculatorButton type="operator" value="x!" onClick={() => handleButtonClick('x!')} />
                <CalculatorButton type="operator" value="x^2" onClick={() => handleButtonClick('x^n')} />
                <CalculatorButton type="operator" value="x^1/y" onClick={() => handleButtonClick('x^1/y')} />
            </div>

            <div className="row">
                <CalculatorButton type="function" value="1/x" onClick={() => handleButtonClick('1/x')} />
                <CalculatorButton type="function" value="=" onClick={() => handleButtonClick('=')} />
                <CalculatorButton type="function" value="C" onClick={() => handleButtonClick('C')} />
                <CalculatorButton type="function" value="CE" onClick={() => handleButtonClick('CE')} />
                <CalculatorButton type="function" value="DEL" onClick={() => handleButtonClick('DEL')} />
                <CalculatorButton type="function" value="ANS" onClick={() => handleButtonClick('ANS')} />
                {/* ... Render more function buttons */}
            </div>
        </div>
    );
};

export default CalculatorButtons;
