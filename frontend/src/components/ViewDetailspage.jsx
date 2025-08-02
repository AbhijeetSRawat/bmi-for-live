import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ViewDetailspage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/product/${id}`);
                setProduct(res.data);
                console.log("data", res.data);

            } catch (err) {
                console.error("Failed to load product", err);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 mt-10 rounded">
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.title}
                    className="w-full md:w-1/2 rounded shadow"
                />

                <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
                        <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                            {product.sale}
                        </span>
                    </div>

                    <p className="text-xl text-green-600 font-semibold mb-4">₹{product.price}</p>

                    <p className="text-gray-600 mb-4">
                        This product is perfect for your kitchen needs. High-quality and affordable!
                    </p>

                    <div className="flex gap-4">
                        <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                            Buy Now
                        </button>
                        <button className="px-5 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailspage;
