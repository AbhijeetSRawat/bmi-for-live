import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

export default function BakeryMachines() {
    const [product, setProducts] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/product?category=Bakery`)
                setProducts(res.data)
            } catch (err) {
                console.log('axios error', err.message)
            }
        }
        fetchApi();
    }, [])
    return (
        <div>
            <Container>
                <section className="px-4 md:px-20 mb-10">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold">Bakery Machines</h3>
                        <a className="text-xs text-blue-600 hover:underline" href="#">View All</a>
                    </div>
                    <div className="flex overflow-x-auto no-scrollbar space-x-4 pb-2">
                        {
                            product.map((item) => (
                                <div key={item._id} className="min-w-[180px] bg-gradient-to-tr from-yellow-50 to-yellow-100 rounded-lg p-4 relative flex-shrink-0">
                                    <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                                        {item.sale}
                                    </div>
                                    <img alt="Hello" className="mx-auto mb-3 h-[120px] w-[160px] object-contain" src={`http://localhost:5000/uploads/${item.image}`} />
                                    <p className="text-xs text-pink-600 font-semibold line-clamp-1 mb-1">{item.title}</p>
                                    <h4 className="text-xs font-semibold mb-1 "> ₹ {item.price}</h4>
                                    <div className="flex justify-between text-xs text-blue-600 font-semibold">


                                        <a href="#">
                                            <button onClick={() => navigate(`/viewdetailspage/${item._id}`)} className='cursor-pointer'>
                                                View Details
                                            </button>
                                        </a>

                                        <a className="hover:underline" href="#">Buy Now</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </Container>

        </div>
    )
}
