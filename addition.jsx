"use client"
import * as React from 'react';

export const Home = () => {
    const [left, setLeft] = React.useState(0);
    const [right, setRight] = React.useState(0);
    const [isLeft, setIsLeft] = React.useState(true);

    const onDigitClick = (digit) => {
        if (isLeft) {
            setLeft(left * 10 + digit);
        } else {
            setRight(right * 10 + digit);
        }
    };

    const onAddClick = () => setIsLeft(!isLeft);
    const onEqualClick = () => {
        console.log(left + right);
    }
    const onClearClick = () => {
        setLeft(0);
        setRight(0);
        setIsLeft(true);
      }

    return (
        <div>
          {left} + {right} = {left + right}
          <br />
            <button onClick={() => onDigitClick(1)}>1</button>
            <button onClick={() => onDigitClick(2)}>2</button>
            <button onClick={onAddClick}>+</button>
            <button onClick={onEqualClick}>=</button>
            <button onClick={onClearClick}>Clear</button>
        </div>
    )
}

export default Home;
