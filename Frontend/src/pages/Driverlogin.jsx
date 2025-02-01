import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DriverDataContext } from '../context/DriverContext';

const Driverlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { driver, setDriver } = useContext(DriverDataContext); // Ensure the context is consumed correctly
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/drivers/login`, {
                email,
                password,
            });

            if (response.status === 200) {
                const data = response.data;
                setDriver(data.driver);
                localStorage.setItem('token', data.token);
                navigate('/driver-home');
            }
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img
                    className="w-20 mb-3"
                    src="https://www.svgrepo.com/show/505031/uber-driver.svg"
                    alt=""
                />

                <form onSubmit={submitHandler}>
                    <h3 className="text-lg font-medium mb-2">What's your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@example.com"
                    />

                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>

                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="password"
                    />

                    <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg">
                        Login
                    </button>
                </form>
                <p className="text-center">
                    Join a fleet?{' '}
                    <Link to="/driver-signup" className="text-blue-600">
                        Register as a driver
                    </Link>
                </p>
            </div>
            <div>
                <Link
                    to="/login"
                    className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg"
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    );
};

export default Driverlogin;
