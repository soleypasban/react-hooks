import { useState } from 'react';

const useForm = initialState => {
    const [values, SetValues] = useState(initialState)

    return [
        values,
        event => SetValues({
            ...values,
            [event.target.name]: event.target.value
        })
    ]
}

export { useForm }