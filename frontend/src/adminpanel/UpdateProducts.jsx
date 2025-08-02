import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

export default function UpdateProducts() {
    const [title, setTitle] = useState('');
    const [sale, setSale] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', title)
        formData.append('price', price)
        formData.append('sale', sale)
        formData.append('category', category)
        if (image) {
            formData.append('image', image)
        }
        try {
            const res = await axios.put(`http://localhost:5000/api/product/${id}`, formData)
            toast.success("product update Successfuly")
            navigate('/readproduct')
        } catch (err) {
            toast.error('axios error', err.message)
        }
    }
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2">
                <div className="bg-blue-600 w-full p-5 text-white font-bold">
                    Products
                    <div className='my-3'>
                        <a href="/readproduct">
                            <button className='cursor-pointer'>Back To View</button>
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-3 md:col-span-2 p-5">
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        <div className="space-y-4 grid md:grid-cols-2 grid-cols-1 gap-3">
                            <div>
                                <label className="block font-semibold mb-1">Sale</label>
                                <input value={sale}
                                    onChange={(e) => setSale(e.target.value)}
                                    type="text"
                                    name="sale"
                                    placeholder="Enter sale"
                                    className="w-full outline-none border-gray-200 border rounded p-2"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-1">Title</label>
                                <input value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text"
                                    name="title"
                                    placeholder="Enter title"
                                    className="w-full outline-none border-gray-200 border rounded p-2"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-1">Price</label>
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    name="price"
                                    placeholder="Enter price"
                                    className="w-full outline-none border-gray-200 border rounded p-2"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-1">Image</label>
                                <input
                                    onChange={(e) => setImage(e.target.files[0])}
                                    type="file"
                                    name="image"
                                    className="w-full border outline-none border-gray-200 rounded p-2"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">Category</label>
                                <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 w-full outline-none border-gray-200 border rounded">
                                    <option value="">Selecet Category</option>
                                    <option value="Bannertop">Bannertop</option>
                                    <option value="Shopby">Shopby</option>
                                    <option value="Superoffer1">Superoffer1</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Bakery">Bakery</option>
                                    <option value="Superoffer2">Superoffer2</option>
                                    <option value="NamkeenMaking">NamkeenMaking</option>
                                    <option value="DairySweet">DairySweet</option>
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 w-full cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
