import React, { useState } from 'react';


const FormExample = () => {
    const [values, SetValues] = useState({
        username: ''
    })

    const onSubmit = data => {
        alert(data.username)
    }

    return (
        <div className="App">
            <input type='text' name='username' value={values.username}
                onChange={e => SetValues({ username: e.target.value })}
            />
            <button onClick={() => onSubmit(values)}> Submit </button>
        </div>
    );
}

const CounterExample = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className="App">
            <button onClick={() => setCounter(c => c - 1)}> Dec </button>
            <span className='with-padding-01'> {counter} </span>
            <button onClick={() => setCounter(c => c + 1)}> Inc </button>
        </div>
    );
}

export const UseStateHook = FormExample