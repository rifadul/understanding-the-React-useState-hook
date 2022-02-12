import React, { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [localDatabase, setLocalDatabase] = useState([]);
    const [emailValidationError, setEmailValidationError] = useState('');
    const [passwordValidationError, setPasswordValidationError] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        if (email && password) {
            const tempDB = {
                id: new Date().getTime().toString(),
                email,
                password,
            };
            setLocalDatabase([...localDatabase, tempDB]);
            setEmail('');
            setPassword('');
            setEmailValidationError('');
            setPasswordValidationError('');
        } else if (email === '') {
            setEmailValidationError('Please enter your email');
            setPasswordValidationError('');
        } else if (password === '') {
            setPasswordValidationError('Please enter your password');
            setEmailValidationError('');
        } else {
            alert('Please all info');
        }
    };
    return (
        <div className="bg-info p-5 rounded-3">
            <h1 className="text-center pb-4">Login your account</h1>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                        <small className="text-danger">
                            {emailValidationError}
                        </small>
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                        <small className="text-danger">
                            {passwordValidationError}
                        </small>
                    </div>
                </div>
                <button type="submit" className="btn btn-warning">
                    Login
                </button>
            </form>

            <div className="mt-5">
                <h2 className="text-center text-dark">User Info</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {localDatabase.map((info, i) => {
                            const { id, email, password } = info;
                            return (
                                <tr key={id}>
                                    <th scope="row"> {i + 1}</th>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
