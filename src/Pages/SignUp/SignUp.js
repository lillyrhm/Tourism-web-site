import React, { useRef } from 'react';
import useForm from '../../Hooks/useForm';
import './sign-up.css';
import { useNavigate } from 'react-router-dom';

export default function SignUp({ submitForm }) {
    const { handelChangeValue, handleFormSubmit, values, errors } = useForm({ submitForm });
    const navigate = useNavigate();
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file.size > 1024) {
            submitForm({ error: "File size can not be more than 1MB" });
        } else {
            submitForm(file);
        }
    }

    const handelFormSubmit = (event) => {
        alert("form submit")
    }

    return (
        <section className='global-container-sign-up'>
            <div className='login-form-sign-up'>
                <h2 className='card-title'>Create Account</h2>
                <div className='card-text'>
                    <form action={handelFormSubmit}>
                        <div className='form-group-sign-up'>
                            <label htmlFor='exampleInputFullName'>FullName</label>
                            {errors.fullName && <p>{errors.fullName}</p>}
                            <input
                                className='form-control form-control-sm'
                                value={values.fullName}
                                id='exampleInputFullName'
                                onChange={handelChangeValue}
                                type='text'
                                name='fullName'
                                required />
                        </div>

                        <div className='form-group-sign-up'>
                            <label htmlFor='exampleInputEmail'>Email Address</label>
                            {errors.email && <p>{errors.email}</p>}
                            <input
                                type='email'
                                className='form-control form-control-sm'
                                id="exampleInputEmail"
                                value={values.email}
                                onChange={handelChangeValue}
                                name='email'
                                required />
                        </div>

                        <div className='form-group-sign-up'>
                            <label htmlFor='exampleInputPassword'>Password</label>
                            {errors.password && <p>{errors.password}</p>}
                            <input
                                className='form-control form-control-sm'
                                id="exampleInputPassword"
                                value={values.password}
                                onChange={handelChangeValue}
                                type='password'
                                name='password'
                                required />
                        </div>

                        <div className='form-group-sign-up'>
                            <label htmlFor='exampleInputPassword'>Confirm Password</label>
                            <input
                                className='form-control form-control-sm'
                                id="exampleInputPassword"
                                value={values.password}
                                onChange={handelChangeValue}
                                type='password'
                                name='confirm password'
                                required />
                            {errors.password && <p>{errors.password}</p>}
                        </div>

                        <button className='btn'
                            type='submit'
                            onClick={handleFormSubmit}>
                            Sign Up
                        </button>

                        <button
                            onClick={() => { navigate('/sign-in') }}
                            className='sign-in'>
                            Already have account?
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
