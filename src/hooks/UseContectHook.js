import React, { useContext, useCallback, useRef } from 'react';
import { useForm } from 'hooks/useForm';

const InputContext = React.createContext(null)

const UseContectHook = () => {
    const [values, SetValues] = useForm({ username: '', email: '' })
    const vRef = useRef(values)
    const onSubmit = useCallback(() => alert(vRef.current.username), [])

    vRef.current = values

    return (
        <InputContext.Provider value={{ values, SetValues }}>
            <UserInputFields />
            <button onClick={onSubmit}> Submit </button>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </InputContext.Provider>
    );
}

const UserInputFields = () =>
    <>
        <TextInput type='text' name='email' placeholder='email' />
        <TextInput type='text' name='username' placeholder='username' />
    </>

const TextInput = props => {
    const { values, SetValues } = useContext(InputContext)
    const localProps = { value: values[props.name], onChange: SetValues, ...props }

    return <input {...localProps} />
}


export { UseContectHook }