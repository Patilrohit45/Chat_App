import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import siginImage from '../assets/signup.jpg';

const Auth = () => {
    const [issignup, setIsSignup] = useState(true);

    const handleChange = ()=>{}

    const switchMode = () => {
        setIsSignup((prevIsSignup)=> !prevIsSignup)
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                    <div className="auth__form-container_fields-content">
                    <p>{issignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={()=>{}}>
                    {issignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                name="fullName"
                                type=
                                'text'
                                placeholder="Full Name"
                                onChange= {handleChange}
                                required
                            />
                        
                        </div>
                    )}
                    <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">User Name</label>
                            <input
                                name="username"
                                type=
                                'text'
                                placeholder="User Name"
                                onChange= {handleChange}
                                required
                            />
                        </div>
                        {issignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="PhoneNumber">Phone Number</label>
                            <input
                                name="PhoneNumber"
                                type='text'
                                placeholder="Phone Number"
                                onChange= {handleChange}
                                required
                            />
                            
                        
                        </div>
                    )}
                    {issignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="avatarURL">Avatar URL</label>
                            <input
                                name="avatarURL"
                                type='text'
                                placeholder="Avatar URL"
                                onChange= {handleChange}
                                required
                            />
                            
                        
                        </div>
                    )}
                    <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type='password'
                                placeholder="Password"
                                onChange= {handleChange}
                                required
                            />
                            
                        
                            </div>
                            {issignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type='password'
                                placeholder="Confirm Password"
                                onChange= {handleChange}
                                required
                            />
                            
                        
                        </div>
                            )}
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {issignup
                            ? "Already have an account ?"
                            : "Don't have an account ?"
                            }
                            <span onClick={switchMode}>
                                {issignup ? "Sign In" : "Sign Up"}
                            </span>
                        </p>
                    </div>
                    </div>
            </div>
            <div className="auth__form-container_image">
                <img  src={siginImage} alt="sign-in"/>
            </div>
        </div>
    )
}

export default Auth
