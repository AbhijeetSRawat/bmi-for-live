import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import axios from 'axios';

export default function SuperOffer1() {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/product?category=Superoffer2`)
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
                <section className='flex items-center gap-5 my-5 justify-between'>
                    {
                        product.map((item) => (
                            <div className="relative bg-gradient-to-tr from-blue-700 to-blue-500 rounded-lg p-6 flex flex-col justify-between">
                                <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded shadow-md">
                                    {item.sale}
                                </div>
                                <img
                                    alt="Musti machine on blue gradient background with super offer label"
                                    className="mx-auto my-6"
                                    src={`http://localhost:5000/uploads/${item.image}`}
                                />
                                <div className="text-white text-center font-semibold text-lg">₹ {item.price}/-</div>
                                <div className="text-white text-center text-xs mt-1">{item.title}</div>
                            </div>
                        ))
                    }
                </section>
            </Container>
        </div>
    )
}
