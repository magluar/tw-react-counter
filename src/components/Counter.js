import { useState } from "react";


function Counter() {
    const [number, setNumber] = useState(0);

    function increase() {
        setNumber(number + 1);
    }

    function decrease() {
        setNumber(number - 1);
    }

    return (
        <div className="counter">
            <button onClick={increase} id="button1">+</button>
            <span>{number}</span>
            <button onClick={decrease} id="button2">-</button>
        </div>
    )
}

export default Counter;