import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import axios from 'axios';

export default function ShopByCategory() {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/product?category=Shopby`)
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
                <section className="py-8 px-4 md:px-20">
                    <h2 className="text-center text-sm font-semibold mb-6">Shop By Categories</h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 flex-wrap">
                        {
                            product.map((item) => (
                                < div className="flex flex-col items-center space-y-2">
                                    <div className="bg-blue-700 rounded-full p-4">
                                        <img alt="Chopper machine on blue circular background"
                                            className="rounded-full"
                                            src={`http://localhost:5000/uploads/${item.image}`}
                                        />
                                    </div>
                                    <span className="text-xs font-semibold">{item.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </Container>
        </div>
    )
}
