import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


export default function Login() {
    const [formData, setFormdata] = useState(
        {
            name: '',
            email: '',
            password: '',
            city: ''
        }
    );
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormdata((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        )
        )
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/users', formData)
            toast.success("User SuccessFully!")
            // alert("User SuccessFully !")
            navigate('/')
            console.log("userSuccess Fully", res.data)
        } catch (error) {
            toast.error("Failed USer")
            // alert("Failed user data")
        }
    }
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <form onSubmit={formSubmit} className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                            type="city"
                            name="city"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="text-right">
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-blue-600 hover:underline font-medium">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
