import React, { useState } from 'react';
import SignupFormSuccess from './SignupFormSuccess';
import SignUp from './SignUp';

export default function FormsSignIn() {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    
    const [imgFile, uploadImg] = useState([])
    console.log("Image FIles", imgFile);
    const imgFileHandler = (e) => {
        if (e.target.files.length !== 0) {
            uploadImg(imgFile => [...imgFile, URL.createObjectURL(e.target.files[0])])
        }
    }
    return (
        <div>
            {/* {!formIsSubmitted ? <SignUp submitForm={submitForm} /> : <SignupFormSuccess />} */}
            return (
            <div>
                <div>
                    <center>
                        <h2>Upload</h2>
                        <input type="file" onChange={imgFileHandler} />
                        <hr />
                        <h2>Preview</h2>
                        {imgFile.map((elem) => {
                            return <>
                                <span key={elem}>
                                    <img src={elem} height="200" width="200" alt="med1" />
                                </span>
                            </>
                        })}
                    </center>
                </div>
            </div>

        </div>
    )
}
