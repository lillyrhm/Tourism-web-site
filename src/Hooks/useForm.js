import React, { useState, useEffect } from 'react'
import validation from '../Pages/SignUp/validation';

const useForm = ({ submitForm }) => {
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: "",
        img:""
    });
    
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handelChangeValue = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    }

    console.log(values);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return { handelChangeValue, handleFormSubmit, values, errors }
}

export default useForm;