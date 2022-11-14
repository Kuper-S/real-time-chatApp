import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';


// difinde initialState
const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

function Auth() {
    const [form, setForm] = useState(initialState);
    const [isSingUp, setIsSingUp] = useState(true)

    function handleChange(e) {
        setForm({...form,[e.target.name]: e.target.value})

        console.log(form)
    }

    function switchMode() {
        setIsSingUp((prevIsSingup) => !prevIsSingup);
    }
  return (
    <div className="auth__form-container">
        <div className="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>{isSingUp ? 'Sing Up' : 'Sing In'}</p>
                <form onSubmit={""}>
                    {isSingUp && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor='fullName'>
                                Full Name
                                <input 
                                    name='fullName'
                                    type='text'
                                    placeholder='Full Name'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    )}
                    <div className="auth__form-container_fields-content_input">
                            <label htmlFor='userName'>
                                User Name
                                <input 
                                    name='username'
                                    type='text'
                                    placeholder='User Name'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                    </div>
                    {isSingUp && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor='phoneNumber'>
                                Phone Number
                                <input 
                                    name='phoneNumber'
                                    type='text'
                                    placeholder='Phone Number'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    )}
                    {isSingUp && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor='avatarURL'>
                                Avatar URL
                                <input 
                                    name='AvatarURL'
                                    type='text'
                                    placeholder='Avatar URL'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    )}
                    <div className="auth__form-container_fields-content_input">
                            <label htmlFor='password'>
                                Password
                                <input 
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    {isSingUp && (
                    <div className="auth__form-container_fields-content_input">
                            <label htmlFor='confirmPassword'>
                                Confirm Password
                                <input 
                                    name='confirmPassword'
                                    type='password'
                                    placeholder='Confirm Password'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                        <button>
                            {isSingUp ? 'Sing Up' : "Sing In"}
                        </button>
                        </div>
                </form>
                <div className="auth__form-container_fields-account">
                        <p>
                            {isSingUp ? "Already have an account ?" : "Dont have an account?"}
                            <span onClick={switchMode}>
                                {isSingUp ? 'Sing In' : 'Sing Out'}
                            </span>
                        </p>
                </div>
            </div>
        </div>
        <div className="auth__form-container_image">
                <img src={signinImage} alt="sign in" />
            </div>
    </div>
  )
}

export default Auth
