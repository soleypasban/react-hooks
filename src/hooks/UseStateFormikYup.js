import React, { useState } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import Axios from "axios";

const ValidationSchema = Yup.object().shape({
    id: Yup.number()
        .min(1, "Too Short!")
        .max(30, "Too Long!")
        .required("Required")
});

const onSubmit = setTask => async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const result = await Axios.get(`https://jsonplaceholder.typicode.com/todos/${values.id}`)
    result && setTask(result.data)
    resetForm();
    setSubmitting(false);
}

export const UseStateFormikYup = () => {

    const [task, setTask] = useState(null)

    return (
        <Formik
            initialValues={{ id: "" }}
            validationSchema={ValidationSchema}
            onSubmit={onSubmit(setTask)}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="c-input-row">
                            <label>Find movies</label>
                            <input
                                type="text"
                                name="id"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.id}
                                className={touched.id && errors.id ? "c-has-error" : null}
                            />
                            {errors.id && <div className="c-form-message-invalid">{errors.id}</div>}
                        </div>

                        <div className="cinput-row">
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </div>
                        <pre>
                            {task && JSON.stringify(task, null, 2)}
                        </pre>
                    </form>
                )}
        </Formik>
    );
}