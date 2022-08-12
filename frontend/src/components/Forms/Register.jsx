import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import './Register.css'

const Register = () => {

    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [stream, setStream] = useState('');
    const [year, setYear] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isLoading, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(fname, email, phoneNumber, collegeName, stream, year, password)

    }

    return (
        <>
            <div className="bbbbb">
                <div className="bodyyy">
                    <div className="container">
                        <div className="title">Registration</div>
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">Full Name</span>
                                        <input type="text" name='name' placeholder='Enter Your Name' required onChange={(e) => setFname(e.target.value)} value={fname} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Email</span>
                                        <input type="email" name='email' placeholder='Enter Your Email' required onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Phone Number</span>
                                        <input type="text" name='phonenumber' placeholder="Enter Your Phone Number" required onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">College name</span>
                                        <input type="text" name='college' placeholder="Enter Your College Name" required onChange={(e) => setCollegeName(e.target.value)} value={collegeName} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Stream</span>
                                        <input type="text" name='stream' placeholder="Enter Your Stream" required onChange={(e) => setStream(e.target.value)} value={stream} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Your Year</span>
                                        <input type="text" name='year' placeholder="Example : 1st Year, 2nd year..." required onChange={(e) => setYear(e.target.value)} value={year} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Password</span>
                                        <input type="password" name='password' placeholder='Enter Your Password' required onChange={(e) => setPassword(e.target.value)} value={password} />
                                    </div>
                                </div>
                                <div className="button">
                                    <input type="submit" value="Register" disabled={isLoading} />

                                    {error && <div className='error' style={{ color: 'red'}}>{error}</div>}
                                </div>
                            </form>
                            <div className="text sign-up-text">Already have an account? <Link to='/login' style={{ textDecoration: "none" }}> Sign In</Link></div>
                        </div>
                    </div>
                </div></div>
        </>
    )
}

export default Register