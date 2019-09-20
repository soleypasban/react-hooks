import React, { useState } from 'react';

const UseStateHook = () => {
    const [values, SetValues] = useState({
        username: '',
        email: ''
    })

    const onChange = e => SetValues({ ...values, [e.target.name]: e.target.value })

    const onSubmit = () => {
        alert(values.username)
    }

    return (
        <div className="App">
            <input type='text' name='email' placeholder='email' value={values.email} onChange={onChange} />
            <input type='text' name='username' placeholder='username' value={values.username} onChange={onChange} />
            <button onClick={onSubmit}> Submit </button>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </div>
    );
}

export { UseStateHook }