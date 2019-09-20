import React from 'react';
import { useForm } from 'hooks/useForm';
import { RenderCount } from 'hooks/RenderCount';

const UseStateHook = () => {
    const [values, SetValues] = useForm({ username: '', email: '' })
    const onSubmit = () => alert(values.username)

    return (
        <>
            <RenderCount name='UseStateHook' />
            <input type='text' name='email' placeholder='email' value={values.email} onChange={SetValues} />
            <input type='text' name='username' placeholder='username' value={values.username} onChange={SetValues} />
            <button onClick={onSubmit}> Submit </button>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </>
    );
}

export { UseStateHook }