import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button
                onClick={() => setCount(count + 1)}
                id="wd-counter-up-click"
                className="btn btn-success btn-lg me-2"  // btn-lg makes the button larger
            >
                Up
            </button>
            <button
                onClick={() => setCount(count - 1)}
                id="wd-counter-down-click"
                className="btn btn-danger btn-lg"  // btn-lg makes the button larger
            >
                Down
            </button>
            <hr />
        </div>
    );
}
