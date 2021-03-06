import React, { useReducer } from 'react';
import { RenderCount } from 'hooks/RenderCount';

function FormReducer(state, action) {
    const { type, payload } = action

    switch (type) {
        case 'UPDATE':
            return { ...state, [payload.name]: payload.value };

        case 'SUBMIT':
            alert(state.username);
            return state

        default:
            break;
    }
}

const UseReducerHook = () => {
    const [values, dispatch] = useReducer(FormReducer, { username: '', email: '' })

    const SetValues = e => dispatch({
        type: 'UPDATE',
        payload: {
            name: e.target.name,
            value: e.target.value
        }
    })

    return (
        <>
            <RenderCount name='UseReducerHook' />
            <input type='text' name='username' placeholder='username' value={values.username} onChange={SetValues} />
            <input type='text' name='email' placeholder='email' value={values.email} onChange={SetValues} />
            <button onClick={() => dispatch({ type: 'SUBMIT' })}> Submit </button>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </>
    );
}

export { UseReducerHook }