import React, { useState } from 'react';

export const UseStateHook = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className="App">
            <button onClick={() => setCounter(c => c - 1)}> Dec </button>
            <span className='with-padding-01'> {counter} </span>
            <button onClick={() => setCounter(c => c + 1)}> Inc </button>
        </div>
    );
}