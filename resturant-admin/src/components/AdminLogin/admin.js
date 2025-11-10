import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // ✅ initialize navigate

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example login validation (replace with your logic)
        if (email === "admin@gmail.com" && password === "123456") {
            console.log("Login successful!");
            navigate("/dashboard"); // ✅ navigate to Dashboard
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="admin-login">
            <h1>Sushi Restaurant</h1>
            <div className="login-container">
                <h2 className='text-2xl text-center font-normal mb-6 text-90'>Welcome Back!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
