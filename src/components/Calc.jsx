import React, { useState } from 'react';
import './calc.css';

const Calc = () => {
    const [value, setValue] = useState('');
    const [history, setHistory] = useState([]);

    const handleClick = (e) => {
        setValue(value + e.target.value);
    };

    const handleClear = () => {
        setValue('');
    };

    const handleDelete = () => {
        setValue(value.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            const result = eval(value).toString();
            setHistory([...history, `${value} = ${result}`]);
            setValue(result);
        } catch (error) {
            setValue('Error');
        }
    };

    const handleKeyPress = (e) => {
        if (/\d|\.|\+|\-|\*|\//.test(e.key)) {
            setValue(value + e.key);
        } else if (e.key === 'Enter') {
            handleCalculate();
        } else if (e.key === 'Backspace') {
            handleDelete();
        } else if (e.key === 'Escape') {
            handleClear();
        }
    };

    return (
        <div className='calc' onKeyDown={handleKeyPress} tabIndex={0}>
            <form action=''>
                <div>
                    <input type='text' value={value} readOnly />
                </div>
                <div className='row'>
                    <input type='button' value='AC' onClick={handleClear} />
                    <input type='button' value='Del' onClick={handleDelete} />
                    <input type='button' value='.' onClick={handleClick} />
                    <input type='button' value='/' onClick={handleClick} />
                </div>
                <div className='row'>
                    <input type='button' value='7' onClick={handleClick} />
                    <input type='button' value='8' onClick={handleClick} />
                    <input type='button' value='9' onClick={handleClick} />
                    <input type='button' value='*' onClick={handleClick} />
                </div>
                <div className='row'>
                    <input type='button' value='4' onClick={handleClick} />
                    <input type='button' value='5' onClick={handleClick} />
                    <input type='button' value='6' onClick={handleClick} />
                    <input type='button' value='-' onClick={handleClick} />
                </div>
                <div className='row'>
                    <input type='button' value='1' onClick={handleClick} />
                    <input type='button' value='2' onClick={handleClick} />
                    <input type='button' value='3' onClick={handleClick} />
                    <input type='button' value='+' onClick={handleClick} />
                </div>
                <div className='row'>
                    <input type='button' value='000' onClick={handleClick} />
                    <input type='button' value='00' onClick={handleClick} />
                    <input type='button' value='0' onClick={handleClick} />
                    <input type='button' value='=' onClick={handleCalculate} className='equal' />
                </div>
            </form>
            <div className='history'>
                <h3>History</h3>
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Calc;