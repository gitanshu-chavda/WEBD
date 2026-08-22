import { useState } from "react";
import Button from "./Button.jsx"; // Capitalized import to match the file/component

function Counter({ name }) {
    const [count, setCount] = useState(0);
    
    const increase = () => {
        // Use count + 1 instead of count++ 
        setCount(count + 1);
    }
    const decrease = () => {
        if(count>0) setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    
    return (
        <div className="counter">
            <h1>{count} Count</h1>
            <p>Hello {name}</p>
            <div className="buttons">
                <Button text="+" onClick={increase} />
            <Button text = "-" onClick = {decrease}/>
            <Button text = "reset" onClick = {reset}/>
            </div>
        </div>
    );
}

export default Counter;