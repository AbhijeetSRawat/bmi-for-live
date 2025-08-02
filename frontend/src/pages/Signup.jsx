import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function Signup() {
    const [formData, setFormdata] = useState(
        {
            name: "",
            email: "",
            password: "",
            conformpasswors: ""
        }
    )
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormdata((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:5000/api/users", formData)
            toast.success("Signup Successfully !")
            navigate('/')
        } catch (err) {
            toast.error("Not Success Signup")
        }
    }
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
                <form onSubmit={formSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name='name'
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none "
                            placeholder=""
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name='email'
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none "
                            placeholder=""
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name='password'
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none "
                            placeholder=""
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name='conformpasswors'
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none "
                            placeholder=""
                            value={formData.conformpasswors}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline font-medium">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
}
