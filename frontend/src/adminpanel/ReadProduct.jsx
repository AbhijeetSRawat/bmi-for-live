import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from '../components/Container';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

export default function ReadProduct() {
    const [product, setProducts] = useState([]);
    const [selectCategory, setSelectCategory] = useState('');
    const navigate = useNavigate();
    const { id } = useParams()
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const url = selectCategory ? `http://localhost:5000/api/product?category=${selectCategory}` : `http://localhost:5000/api/product`
                const res = await axios.get(url)
                setProducts(res.data)
            } catch (err) {
                console.log("axios Error", err.message)
            }
        };
        fetchApi();
    }, [selectCategory]);
    const deleteHandle = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/product/${id}`)
            toast.success('Product Deleted')
        } catch (err) {
            toast.error("axios error")
        }
    }
    return (
        <div>
            <Container>
                <div className="space-y-5 flex items-center p-4 justify-between">
                    <div>
                        <label className="block font-semibold mb-1">Category</label>
                        <select value={selectCategory} onChange={(e) => setSelectCategory(e.target.value)} className="p-2 w-full outline-none border-gray-200 border rounded">

                            <option value="">All</option>
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
                    <a href="/createproduct">
                        <button className='bg-gray-500 p-2 rounded cursor-pointer'>Back To View</button>
                    </a>
                </div>
                <div>
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5">
                        {
                            product.map((item) => (
                                <div key={item._id} className="flex overflow-x-auto no-scrollbar space-x-4 pb-2">

                                    <div className="min-w-[180px] bg-gradient-to-tr from-yellow-50 to-yellow-100 rounded-lg p-4 relative flex-shrink-0">
                                        <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                                            {item.sale}
                                        </div>
                                        <img alt="Hello" className="mx-auto mb-3 h-[120px] w-[160px] object-contain" src={`http://localhost:5000/uploads/${item.image}`} />
                                        <h4 className="text-xs font-semibold mb-1 text-pink-600"> {item.title}</h4>
                                        <p className="text-xs  font-semibold line-clamp-1 mb-1">₹{item.price}</p>
                                        <p className="text-xs  font-semibold text-green-700 line-clamp-1 mb-1">{item.category}</p>
                                        <div className="flex justify-between text-xs text-blue-600 font-semibold">

                                            <a href="#">
                                                <button className='cursor-pointer'>
                                                    View Details
                                                </button>
                                            </a>

                                            <a className="hover:underline" href="#">Buy Now</a>
                                        </div>
                                        <div className="flex items-center justify-between mt-3 gap-2">
                                            <button onClick={() => navigate(`/edit/${item._id}`)} className='bg-blue-600 p-1 rounded cursor-pointer text-white'>Update</button>
                                            <button onClick={() => deleteHandle(item._id)} className='bg-red-600 p-1 rounded cursor-pointer text-white'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}