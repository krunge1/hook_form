import React, { useState } from 'react'

const Form = (person) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>First Name:</label>
                <input 
                    onChange = {(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type='text'>
                </input>
                <label>Last Name:</label>
                <input 
                    onChange = {(e) => setLastName(e.target.value)}
                    value={lastName}
                    type='text'>
                </input>                
                <label>Email:</label>
                <input 
                    onChange = {(e) => setEmail(e.target.value)}
                    value={email}
                    type='email'>
                </input>                
                <label>Password:</label>
                <input 
                    onChange = {(e) => setPassword(e.target.value)}
                    value={password}
                    type='password'>
                </input>                
                <label>Confirm Password:</label>
                <input 
                    onChange = {(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type='password'>
                </input>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form