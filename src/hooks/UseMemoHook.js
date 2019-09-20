import React, { useMemo, useRef } from 'react';
import { useForm } from 'hooks/useForm';

function validateEmail(email, validatorRef) {
    validatorRef.current++
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

const UseMemoHook = () => {
    const validatorRef = useRef(0)
    const [values, SetValues] = useForm({ username: '', email: '' })
    const onSubmit = () => alert(values.username)

    const isEmailCorrect = useMemo(() => validateEmail(values.email, validatorRef), [values.email])

    return (
        <>
            <div>{isEmailCorrect ? 'Valid email address' : 'Invalid email address'}</div>
            <div>validateEmail calls: {validatorRef.current}</div>
            <input type='text' name='email' placeholder='email' value={values.email} onChange={SetValues} />
            <input type='text' name='username' placeholder='username' value={values.username} onChange={SetValues} />
            <button onClick={onSubmit}> Submit </button>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </>
    );
}

export { UseMemoHook }