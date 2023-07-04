import React from 'react';

const CalculatorButton = ({ type, value, onClick }) => {
    return (
        <button className={`calculator-button ${type}`} onClick={onClick}>
            {value}
        </button>
    );
};

export default CalculatorButton;