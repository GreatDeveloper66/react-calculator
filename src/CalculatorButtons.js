import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorContext.js';
import CalculatorButton from './CalculatorButton.js';

const CalculatorButtons = () => {
    const { handleButtonClick } = useContext(CalculatorContext);

    return (
        <div className="calculator-buttons">
            <div className="row">
                <CalculatorButton type="number" value="1" onClick={() => handleButtonClick('1')} />
                <CalculatorButton type="number" value="5" onClick={() => handleButtonClick('5')} />
                <CalculatorButton type="number" value="9" onClick={() => handleButtonClick('9')} />
                <CalculatorButton type="operator" value="cos" onClick={() => handleButtonClick('cos')} />
                <CalculatorButton type="operator" value="%" onClick={() => handleButtonClick('%')} />
                <CalculatorButton type="operator" value="&Pi;" onClick={() => handleButtonClick('&Pi;')} />
                <CalculatorButton type="operator" value="+" onClick={() => handleButtonClick('+')} />
                <CalculatorButton type="operator" value=")" onClick={() => handleButtonClick(')')} />
                <CalculatorButton type="operator" value="C" onClick={() => handleButtonClick('C')} />
            </div>
            <div className="row">
                <CalculatorButton type="operator" value="2" onClick={() => handleButtonClick('2')} />
                <CalculatorButton type="operator" value="6" onClick={() => handleButtonClick('6')} />
                <CalculatorButton type="operator" value="0" onClick={() => handleButtonClick('0')} />
                <CalculatorButton type="operator" value="tan" onClick={() => handleButtonClick('tan')} />
                {/* ... Render more number buttons */}
                <CalculatorButton type="operator" value="^" onClick={() => handleButtonClick('^')} />
                <CalculatorButton type="operator" value="x!" onClick={() => handleButtonClick('x!')} />
                <CalculatorButton   type="operator" value="-" onClick={() => handleButtonClick('-')} />
                <CalculatorButton type="operator" value="(" onClick={() => handleButtonClick('(')} />
                <CalculatorButton type="operator" value="CE" onClick={() => handleButtonClick('CE')} />
            </div>
            <div className="row">
                <CalculatorButton type="operator" value="3" onClick={() => handleButtonClick('3')} />
                <CalculatorButton type="operator" value="7" onClick={() => handleButtonClick('7')} />
                <CalculatorButton type="operator" value="." onClick={() => handleButtonClick('.')} />
                <CalculatorButton type="operator" value="log" onClick={() => handleButtonClick('log')} />
                <CalculatorButton type="operator" value="ln" onClick={() => handleButtonClick('ln')} />
                <CalculatorButton type="operator" value="x^2" onClick={() => handleButtonClick('x^2')} />
                <CalculatorButton type="operator" value="/" onClick={() => handleButtonClick('/')} />
                <CalculatorButton type="operator" value="√" onClick={() => handleButtonClick('√')} />
                <CalculatorButton type="operator" value="=" onClick={() => handleButtonClick('=')} />
                


            </div>

            <div className="row">
                <CalculatorButton type="function" value="4" onClick={() => handleButtonClick('4')} />
                <CalculatorButton type="function" value="8" onClick={() => handleButtonClick('8')} />
                <CalculatorButton type="function" value="sin" onClick={() => handleButtonClick('sin')} />
                <CalculatorButton type="function" value="1/x" onClick={() => handleButtonClick('1/x')} />
                <CalculatorButton type="function" value="x^1/y" onClick={() => handleButtonClick('x^1/y')} />
                <CalculatorButton type="function" value="x^y" onClick={() => handleButtonClick('x^y')} />   
                <CalculatorButton type="function" value="*" onClick={() => handleButtonClick('*')} />
                <CalculatorButton type="function" value="DEL" onClick={() => handleButtonClick('DEL')} />
                <CalculatorButton type="function" value="ANS" onClick={() => handleButtonClick('ANS')} />
                {/* ... Render more function buttons */}
            </div>
        </div>
    );
};

export default CalculatorButtons;
