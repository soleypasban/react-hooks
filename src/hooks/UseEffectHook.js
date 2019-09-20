import React from 'react';
import { useForm } from 'hooks/useForm';

const UseEffectHook = () => {
    const [values, SetValues] = useForm({ username: '', email: '' })

    return (
        <>
            <input type='text' name='email' placeholder='email' value={values.email} onChange={SetValues} />
            <input type='text' name='username' placeholder='username' value={values.username} onChange={SetValues} />
            <button onClick={onSubmit}> Submit </button>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </>
    );
}

export { UseEffectHook }