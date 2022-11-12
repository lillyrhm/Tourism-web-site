import React, { useRef, useState, useEffect, useContext } from 'react';
import useForm from '../../Hooks/useForm';
import './sign-in.css';
import { useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthProvider';
import StyledPage from '../../component/bootstrap/bootstrap';

export default function SignIn({ submitForm }) {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const { values, errors } = useForm({ submitForm });
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd)
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            <StyledPage />
            {success ? (
                <section className='global-container'>
                    <h1 onClick={() => {
                        navigate('/')
                    }}>You are logged  in! Go to home page!</h1>
                </section>
            ) : (
                <section className='global-container'>
                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive">
                        {errMsg}
                    </p>

                    <div className='login-form'>
                        <div className='card-body'>
                            <h1 className='card-title'>SIGN IN</h1>
                            <div className='card-text'>
                                <form onSubmit={handelSubmit}>
                                    <div className='form-group'>
                                        <span>Email Address</span>
                                        <input
                                            type='email'
                                            ref={userRef}
                                            value={values.user}
                                            onChange={(e) => setUser(e.target.value)}
                                            className='form-control'
                                            id="inputEmail"
                                            required />
                                        {errors.email && <p>{errors.email}</p>}
                                    </div>

                                    <div lassName='form-group'>
                                        <span>Password</span>
                                        <a className="a--text" href='#' >Forgot Password?</a>
                                        {errors.password && <p>{errors.password}</p>}
                                        <input
                                            type='password'
                                            ref={userRef}
                                            value={values.pwd}
                                            onChange={(e) => setPwd(e.target.value)}
                                            className='form-control form-control-sm'
                                            id="inputPassword"
                                            required />
                                    </div>

                                    <button className='btn'
                                        type='submit'
                                        onClick={handelSubmit}
                                    >
                                        Sign In
                                    </button>

                                    <button
                                        onClick={() => { navigate('/sign-up') }}
                                        className='sign-up-text'>
                                        Don't have an account? Create One
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section >
            )}
        </>
    )
}
