import React, { useEffect, useState } from 'react'
import Container from './Container'
import ShopByCategory from '../pages/ShopByCategory';
import SuperOffer from '../pages/SuperOffer';
import RestaurantEquipment from '../pages/RestaurantEquipment';
import BakeryMachines from '../pages/BakeryMachines';
import SuperOffer1 from '../pages/SuperOffer1';
import NamkeenMaking from '../pages/NamkeenMaking';
import DairySweets from '../pages/DairySweets';
import axios from 'axios';
export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/product?category=Bannertop`)
                setProducts(res.data)
            } catch (err) {
                console.log("axios error", err.message)
            }
        }
        fetchApi();
    }, [])
    return (
        <>
            <div className="bg-white text-gray-800 font-sans">
                {
                    products.map((item) => (
                        <section className="relative bg-gradient-to-r from-pink-300 to-pink-200 py-5 px-4 md:px-10 flex flex-col md:flex-row items-center justify-center gap-8">
                            <div className="  text-center md:text-left">
                                <p className="text-pink-700 text-xl md:text-2xl leading-tight">
                                    POWER<br />
                                    <span className="text-pink-900 font-bold">{item.title}</span><br />
                                    BUSINESS<br />
                                    WITH PRECISION
                                </p>
                                <div className="mt-6 flex justify-center md:justify-start gap-4">
                                    <button className="bg-pink-700 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-pink-800 transition">
                                        SHOP NOW
                                    </button>
                                    <button className="border border-pink-700 text-pink-700 px-6 py-2 rounded text-sm font-semibold hover:bg-pink-700 hover:text-white transition">
                                        AUTO SHOP
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-start">

                                <img
                                    alt="Group of stainless steel food processing machines on pink gradient background"
                                    className="w-150"
                                    src={`http://localhost:5000/uploads/${item.image}`}
                                />
                            </div>
                        </section>
                    ))
                }
                {/* is component ma b fetche ha products */}
                <ShopByCategory />
                {/* is component ma b fetche ha products */}
                <SuperOffer />
                {/* is component ma api fetch ha  products  */}
                <RestaurantEquipment />
                <Container>
                    <section className="px-4 md:px-20 mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="bg-gradient-to-tr from-blue-100 to-blue-200 rounded-lg p-6">
                            <h3 className="text-xs font-semibold text-blue-900 mb-2">
                                ENJOY THE BEST SHOPPING EXPERIENCE
                            </h3>
                            <h2 className="text-xl font-bold text-blue-900 mb-4 leading-tight">
                                Easy Online Shopping and Store Pickup
                            </h2>
                            <div className="flex space-x-4 mb-6">
                                {[
                                    {
                                        text: "Cash on Delivery",
                                        img: "https://storage.googleapis.com/a1aa/image/948e7833-2429-4b84-3253-f98a0a40d3a4.jpg"
                                    },
                                    {
                                        text: "Easy Return",
                                        img: "https://storage.googleapis.com/a1aa/image/6d71d4e6-2e58-49e6-9a34-74e5fbea83a9.jpg"
                                    },
                                    {
                                        text: "Store Pickup",
                                        img: "https://storage.googleapis.com/a1aa/image/bbb2d493-f360-492a-5429-f5b6b2648398.jpg"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-2 bg-white rounded px-3 py-1 shadow">
                                        <img alt={`${item.text} icon`} className="w-6 h-6" src={item.img} />
                                        <span className="text-xs font-semibold text-blue-900">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition">
                                LEARN MORE
                            </button>
                        </div>
                        <div>
                            <img
                                alt="Nirali Food Processing store front illuminated at night"
                                className="rounded-lg w-full h-auto"
                                src="/images/img3-removebg-preview.png"
                            />
                        </div>
                    </section>
                </Container>
                <BakeryMachines />

                <SuperOffer1 />
                {/* is component ma api fetch ha products 2  */}
                <NamkeenMaking />

                {/* is component ma api fetch ha products 3  */}


                <section className="bg-gradient-to-tr from-blue-100 to-blue-200 px-4 md:px-20 py-10 mb-10 rounded-lg relative">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="max-w-md text-center md:text-left">
                            <p className="text-xs text-blue-900 font-semibold mb-1">NOT SURE WHICH</p>
                            <h3 className="text-xl font-bold text-blue-900 mb-2 leading-tight">
                                One is Right For You?
                            </h3>
                            <p className="text-sm text-blue-900 mb-4">
                                Our experts can help you choose the right machine for your needs.
                            </p>
                            <button className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition">
                                GET IN TOUCH
                            </button>
                        </div>
                        <div className="bg-blue-300 rounded-lg p-6 flex flex-col items-center justify-center w-40 h-40">
                            <div className="text-white text-center text-sm font-semibold">
                                Need Help?
                            </div>
                            <div className="text-white text-3xl mt-2">?</div>
                        </div>
                    </div>
                </section>
                <DairySweets />


            </div >
        </>
    )
}

// import React from 'react'
// import Container from './Container'


// export default function Home() {
//     return (
//         <>
//             <div className="bg-white text-gray-800 font-sans">
//                 <section className="relative  py-5 px-4 md:px-10 flex flex-col md:flex-row items-center justify-center gap-8">
//                     <div className="  text-center md:text-left">
//                         <p className="text-yellow-700 text-xl md:text-2xl leading-tight">
//                             Leading Suppliers Of<br />
//                             <span className="text-yellow-900 font-bold">Disposable Product Making Machines</span><br />
//                         </p>
//                         <div className="mt-6 flex justify-center md:justify-start gap-4">
//                             <button className="bg-yellow-700 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-pink-800 transition">
//                                 Enquire Now
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex justify-center md:justify-start">
//                         <img
//                             alt="Group of stainless steel food processing machines on pink gradient background"
//                             className="w-150"
//                             src="https://image3.jdomni.in/banner/08062022/D3/88/81/A7FFF813E70D62E79E637534ED_1654667431075.jpeg?output-format=webp"
//                         />
//                     </div>
//                 </section>

//                 <Container>
//                     <section className="py-8 px-4 md:px-20">
//                         <h2 className="text-center text-sm font-semibold mb-6">Shop By Categories</h2>
//                         <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 flex-wrap">
//                             <div className="flex flex-col items-center space-y-2">
//                                 <div className="bg-yellow-500 rounded-full p-2">
//                                     <img alt="Chopper machine on blue circular background"
//                                         className="rounded-full"
//                                         src="https://image3.jdomni.in/banner/08062022/7A/4E/7E/F798B8235D74B680DC816D5744_1654665625018.png?output-format=webp"
//                                     />
//                                 </div>
//                                 <span className="font-semibold text-center">Plastic Glass Making Machine</span>
//                             </div>
//                             <div className="flex flex-col items-center space-y-2">
//                                 <div className="bg-yellow-500 rounded-full p-2">
//                                     <img
//                                         alt="Mixer machine on blue circular background"
//                                         className="rounded-full"
//                                         src="https://image3.jdomni.in/banner/08062022/EA/FF/01/51E087D00E72DBF85FC5D4CA45_1654666249809.png?output-format=webp"
//                                     />
//                                 </div>
//                                 <span className="font-semibold text-center">Paper Cup Making Machine</span>
//                             </div>
//                             <div className="flex flex-col items-center space-y-2">
//                                 <div className="bg-yellow-500 rounded-full p-2">
//                                     <img
//                                         alt="Grinder machine on blue circular background"
//                                         className="rounded-full"
//                                         src="https://image2.jdomni.in/banner/08062022/7D/54/B4/92C16EF585B66990A58E6A5CF1_1654666627689.png?output-format=webp"
//                                     />
//                                 </div>
//                                 <span className="font-semibold text-center">Thermocol Plate Making Machine</span>
//                             </div>
//                             <div className="flex flex-col items-center space-y-2">
//                                 <div className="bg-yellow-500 rounded-full p-2">
//                                     <img
//                                         alt="Boiler machine on blue circular background"
//                                         className="rounded-full"
//                                         src="https://image3.jdomni.in/banner/08062022/EB/84/1F/4028C58B9AEDBF0F105148937A_1654667029926.png?output-format=webp"
//                                     />
//                                 </div>
//                                 <span className=" text-center font-semibold">Dona Making Machine</span>
//                             </div>
//                         </div>
//                     </section>
//                 </Container>

//                 <Container>
//                     <section className="px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                         <div className="relative bg-gradient-to-tr from-yellow-700 to-yellow-500 rounded-lg p-6 flex flex-col justify-between">
//                             <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded shadow-md">
//                                 SUPER OFFER
//                             </div>
//                             <img
//                                 alt="Musti machine on blue gradient background with super offer label"
//                                 className="mx-auto my-6"
//                                 src="https://image3.jdomni.in/banner/08062022/6E/D5/5E/3026927E68B1715E6B3E997A2A_1654667936286.png?output-format=webp"
//                             />
//                             <div className="text-white text-center font-semibold text-lg">₹ 61,790/-</div>
//                             <div className="text-white text-center text-xs uppercase mt-1">Paper Cup Making Machine</div>
//                         </div>
//                         <div className="relative bg-gradient-to-tr from-yellow-600 to-yellow-400 rounded-lg p-6 flex flex-col justify-between">
//                             <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded shadow-md">
//                                 SUPER OFFER
//                             </div>
//                             <img
//                                 alt="Mava machine on blue gradient background with super offer label"
//                                 className="mx-auto my-6"
//                                 src="https://image2.jdomni.in/banner/08062022/C7/C3/F9/74A0EF101D186740ABDF4502B6_1654668156671.jpeg?output-format=webp"
//                             />
//                             <div className="text-white text-center font-semibold text-lg">₹ 71,980/-</div>
//                             <div className="text-white text-center text-xs uppercase mt-1">Paper Cup Making Machine</div>
//                         </div>
//                     </section>
//                 </Container>

//                 <Container>
//                     <section className="px-4 md:px-20 mb-10">
//                         <div className="flex justify-between items-center mb-4">
//                             <h3 className="text-sm font-semibold">Categories</h3>
//                             <a className="text-xs text-blue-600 hover:underline" href="#">View All</a>
//                         </div>
//                         <div className="flex overflow-x-auto no-scrollbar space-x-4 pb-2">
//                             {[
//                                 {
//                                     title: "Plastic Glass Making Machine",
//                                     price: "₹ 71,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/7A/4E/7E/F798B8235D74B680DC816D5744_1654665625018.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Paper Cup Making Machine",
//                                     price: "₹ 45,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/EA/FF/01/51E087D00E72DBF85FC5D4CA45_1654666249809.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Thermocol Plate Making Machine",
//                                     price: "₹ 37,000",
//                                     img: "https://image2.jdomni.in/banner/08062022/7D/54/B4/92C16EF585B66990A58E6A5CF1_1654666627689.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Dona Making Machine",
//                                     price: "₹ 29,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/EB/84/1F/4028C58B9AEDBF0F105148937A_1654667029926.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Plastic Glass Making Machine",
//                                     price: "₹ 71,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/7A/4E/7E/F798B8235D74B680DC816D5744_1654665625018.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Paper Cup Making Machine",
//                                     price: "₹ 45,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/EA/FF/01/51E087D00E72DBF85FC5D4CA45_1654666249809.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Thermocol Plate Making Machine",
//                                     price: "₹ 37,000",
//                                     img: "https://image2.jdomni.in/banner/08062022/7D/54/B4/92C16EF585B66990A58E6A5CF1_1654666627689.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Dona Making Machine",
//                                     price: "₹ 29,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/EB/84/1F/4028C58B9AEDBF0F105148937A_1654667029926.png?output-format=webp"
//                                 }
//                             ].map((item, index) => (
//                                 <div key={index} className="min-w-[180px] bg-gradient-to-tr from-yellow-700 to-yellow-500 rounded-lg p-4 relative flex-shrink-0">
//                                     <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
//                                         New
//                                     </div>
//                                     <img alt={item.title} className="mx-auto mb-3 h-[120px] w-[160px] object-contain" src={item.img} />
//                                     <h4 className="text-xs text-white font-semibold mb-1">{item.title}</h4>
//                                     <p className="text-xs text-white font-semibold mb-1">{item.price}</p>
//                                     <div className="flex justify-between text-xs text-white font-semibold">
//                                         <a className="hover:underline" href="#">View Details</a>
//                                         <a className="hover:underline" href="#">Buy Now</a>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 </Container>

//                 <Container>
//                     <section className="px-4 md:px-20 mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//                         <div className="bg-gradient-to-tr from-blue-100 to-blue-200 rounded-lg p-6">
//                             <h3 className="text-xs font-semibold text-blue-900 mb-2">
//                                 ENJOY THE BEST SHOPPING EXPERIENCE
//                             </h3>
//                             <h2 className="text-xl font-bold text-blue-900 mb-4 leading-tight">
//                                 Easy Online Shopping and Store Pickup
//                             </h2>
//                             <div className="flex space-x-4 mb-6">
//                                 {[
//                                     {
//                                         text: "Cash on Delivery",
//                                         img: "https://storage.googleapis.com/a1aa/image/948e7833-2429-4b84-3253-f98a0a40d3a4.jpg"
//                                     },
//                                     {
//                                         text: "Easy Return",
//                                         img: "https://storage.googleapis.com/a1aa/image/6d71d4e6-2e58-49e6-9a34-74e5fbea83a9.jpg"
//                                     },
//                                     {
//                                         text: "Store Pickup",
//                                         img: "https://storage.googleapis.com/a1aa/image/bbb2d493-f360-492a-5429-f5b6b2648398.jpg"
//                                     }
//                                 ].map((item, index) => (
//                                     <div key={index} className="flex items-center space-x-2 bg-white rounded px-3 py-1 shadow">
//                                         <img alt={`${item.text} icon`} className="w-6 h-6" src={item.img} />
//                                         <span className="text-xs font-semibold text-blue-900">{item.text}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                             <button className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition">
//                                 LEARN MORE
//                             </button>
//                         </div>
//                         <div>
//                             <img
//                                 alt="Nirali Food Processing store front illuminated at night"
//                                 className="rounded-lg w-full h-auto"
//                                 src="https://image2.jdomni.in/banner/08062022/C7/C3/F9/74A0EF101D186740ABDF4502B6_1654668156671.jpeg?output-format=webp"
//                             />
//                         </div>
//                     </section>
//                 </Container>

//                 <Container>
//                     <section className="px-4 md:px-20 mb-10">
//                         <div className="flex justify-between items-center mb-4">
//                             <h3 className="text-sm font-semibold">Gallery</h3>
//                             <a className="text-xs text-blue-600 hover:underline" href="#">View All</a>
//                         </div>
//                         <div className="flex overflow-x-auto no-scrollbar space-x-4 pb-2">
//                             {[
//                                 {
//                                     title: "Plastic Glass Making Machine",
//                                     price: "₹ 71,000",
//                                     img: "https://image3.jdomni.in/banner/23082021/B6/AD/92/2138FE55630EBC62F39C0BB709_1629727949571.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Paper Cup Making Machine",
//                                     price: "₹ 45,000",
//                                     img: "https://image2.jdomni.in/banner/23082021/E0/28/70/BDFEC148466516BF4F09049709_1629727877930.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Thermocol Plate Making Machine",
//                                     price: "₹ 37,000",
//                                     img: "https://image1.jdomni.in/banner/23082021/B9/91/DA/029F141AA5D27C023792CC4D46_1629727742276.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Dona Making Machine",
//                                     price: "₹ 29,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/6E/D5/5E/3026927E68B1715E6B3E997A2A_1654667936286.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Plastic Glass Making Machine",
//                                     price: "₹ 71,000",
//                                     img: "https://image2.jdomni.in/banner/6F/17/40/64A85CFF683306801876C06FBF_1510294022460.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Paper Cup Making Machine",
//                                     price: "₹ 45,000",
//                                     img: "https://image2.jdomni.in/banner/08062022/C7/C3/F9/74A0EF101D186740ABDF4502B6_1654668156671.jpeg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Thermocol Plate Making Machine",
//                                     price: "₹ 37,000",
//                                     img: "https://image3.jdomni.in/banner/23082021/B6/AD/92/2138FE55630EBC62F39C0BB709_1629727949571.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Dona Making Machine",
//                                     price: "₹ 29,000",
//                                     img: "https://image2.jdomni.in/banner/23082021/E0/28/70/BDFEC148466516BF4F09049709_1629727877930.jpg?output-format=webp"
//                                 }
//                             ].map((item, index) => (
//                                 <div key={index} className="min-w-[180px] bg-gradient-to-tr from-yellow-700 to-yellow-500 rounded-lg p-4 relative flex-shrink-0">
//                                     <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
//                                         New
//                                     </div>
//                                     <img alt={item.title} className="mx-auto mb-3 h-[120px] w-[160px] object-contain" src={item.img} />
//                                     <h4 className="text-xs text-white font-semibold mb-1">{item.title}</h4>
//                                     <p className="text-xs text-white font-semibold mb-1">{item.price}</p>
//                                     <div className="flex justify-between text-xs text-white font-semibold">
//                                         <a className="hover:underline" href="#">View Details</a>
//                                         <a className="hover:underline" href="#">Buy Now</a>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 </Container>

//                 <Container>
//                     <section className="px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                         <div className="relative overflow-hidden bg-gradient-to-tr from-yellow-500 to-yellow-200 rounded-lg pb-2 flex flex-col justify-between">
//                             <div className="absolute top-4 left-4 bg-yellow-400 text-pink-900 text-xs font-bold px-3 py-1 rounded shadow-md">
//                                 SUPER OFFER
//                             </div>
//                             <img
//                                 alt="Gravy machine on pink gradient background with super offer label"
//                                 className=" "
//                                 src="https://image3.jdomni.in/banner/08062022/7A/4E/7E/F798B8235D74B680DC816D5744_1654665625018.png?output-format=webp"
//                             />
//                             <div className="text-white text-center font-semibold text-lg">₹ 9,742/-</div>
//                             <div className="text-white text-center text-xs mt-1">Plastic Glass Making Machine</div>
//                         </div>
//                         <div className="relative overflow-hidden bg-gradient-to-tr from-yellow-300 to-yellow-200 rounded-lg pb-2 flex flex-col justify-between">
//                             <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded shadow-md">
//                                 SUPER OFFER
//                             </div>
//                             <img
//                                 alt="Powder mixer machine on yellow gradient background with super offer label"
//                                 className="mx-auto"
//                                 src="https://image3.jdomni.in/banner/08062022/EA/FF/01/51E087D00E72DBF85FC5D4CA45_1654666249809.png?output-format=webp"
//                             />
//                             <div className="text-center font-semibold text-lg">₹ 55,153/-</div>
//                             <div className="text-center text-xs mt-1">Paper Cup Making Machine</div>
//                             {/* <img
//                             alt="Powder mixer tray image"
//                             className="mx-auto mt-2"
//                             src="https://storage.googleapis.com/a1aa/image/2b1ae65f-055a-4871-9cad-d3e2911ae3b7.jpg"
//                         /> */}
//                         </div>
//                     </section>
//                 </Container>

//                 <Container>
//                     <section className="px-4 md:px-20 mb-10">
//                         <div className="flex justify-between items-center mb-4">
//                             <h3 className="text-sm font-semibold">Gallery</h3>
//                             <a className="text-xs text-blue-600 hover:underline" href="#">View All</a>
//                         </div>
//                         <div className="flex overflow-x-auto no-scrollbar space-x-4 pb-2">
//                             {[
//                                 {
//                                     title: "Plastic Glass Making Machine",
//                                     price: "₹ 71,000",
//                                     img: "https://image3.jdomni.in/banner/23082021/B6/AD/92/2138FE55630EBC62F39C0BB709_1629727949571.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Paper Cup Making Machine",
//                                     price: "₹ 45,000",
//                                     img: "https://image2.jdomni.in/banner/23082021/E0/28/70/BDFEC148466516BF4F09049709_1629727877930.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Thermocol Plate Making Machine",
//                                     price: "₹ 37,000",
//                                     img: "https://image1.jdomni.in/banner/23082021/B9/91/DA/029F141AA5D27C023792CC4D46_1629727742276.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Dona Making Machine",
//                                     price: "₹ 29,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/6E/D5/5E/3026927E68B1715E6B3E997A2A_1654667936286.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Plastic Glass Making Machine",
//                                     price: "₹ 71,000",
//                                     img: "https://image2.jdomni.in/banner/6F/17/40/64A85CFF683306801876C06FBF_1510294022460.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Paper Cup Making Machine",
//                                     price: "₹ 45,000",
//                                     img: "https://image2.jdomni.in/banner/08062022/C7/C3/F9/74A0EF101D186740ABDF4502B6_1654668156671.jpeg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Thermocol Plate Making Machine",
//                                     price: "₹ 37,000",
//                                     img: "https://image3.jdomni.in/banner/23082021/B6/AD/92/2138FE55630EBC62F39C0BB709_1629727949571.jpg?output-format=webp"
//                                 },
//                                 {
//                                     title: "Dona Making Machine",
//                                     price: "₹ 29,000",
//                                     img: "https://image2.jdomni.in/banner/23082021/E0/28/70/BDFEC148466516BF4F09049709_1629727877930.jpg?output-format=webp"
//                                 }
//                             ].map((item, index) => (
//                                 <div key={index} className="min-w-[180px] bg-gradient-to-tr from-yellow-700 to-yellow-500 rounded-lg p-4 relative flex-shrink-0">
//                                     <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
//                                         New
//                                     </div>
//                                     <img alt={item.title} className="mx-auto mb-3 h-[120px] w-[160px] object-contain" src={item.img} />
//                                     <h4 className="text-xs text-white font-semibold mb-1">{item.title}</h4>
//                                     <p className="text-xs text-white font-semibold mb-1">{item.price}</p>
//                                     <div className="flex justify-between text-xs text-white font-semibold">
//                                         <a className="hover:underline" href="#">View Details</a>
//                                         <a className="hover:underline" href="#">Buy Now</a>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 </Container>

//                 <section className="bg-gradient-to-tr from-blue-100 to-blue-200 px-4 md:px-20 py-10 mb-10 rounded-lg relative">
//                     <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
//                         <div className="max-w-md text-center md:text-left">
//                             <p className="text-xs text-blue-900 font-semibold mb-1">NOT SURE WHICH</p>
//                             <h3 className="text-xl font-bold text-blue-900 mb-2 leading-tight">
//                                 One is Right For You?
//                             </h3>
//                             <p className="text-sm text-blue-900 mb-4">
//                                 Our experts can help you choose the right machine for your needs.
//                             </p>
//                             <button className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition">
//                                 GET IN TOUCH
//                             </button>
//                         </div>
//                         <div className="bg-blue-300 rounded-lg p-6 flex flex-col items-center justify-center w-40 h-40">
//                             <div className="text-white text-center text-sm font-semibold">
//                                 Need Help?
//                             </div>
//                             <div className="text-white text-3xl mt-2">?</div>
//                         </div>
//                     </div>
//                 </section>
//                 <Container>
//                     <section className="px-4 md:px-20 mb-10">
//                         <div className="flex justify-between items-center mb-4">
//                             <h3 className="text-sm font-semibold">Categories</h3>
//                             <a className="text-xs text-blue-600 hover:underline" href="#">View All</a>
//                         </div>
//                         <div className="flex overflow-x-auto no-scrollbar space-x-4 pb-2">
//                             {[
//                                 {
//                                     title: "Plastic Glass Making Machine",
//                                     price: "₹ 71,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/7A/4E/7E/F798B8235D74B680DC816D5744_1654665625018.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Paper Cup Making Machine",
//                                     price: "₹ 45,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/EA/FF/01/51E087D00E72DBF85FC5D4CA45_1654666249809.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Thermocol Plate Making Machine",
//                                     price: "₹ 37,000",
//                                     img: "https://image2.jdomni.in/banner/08062022/7D/54/B4/92C16EF585B66990A58E6A5CF1_1654666627689.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Dona Making Machine",
//                                     price: "₹ 29,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/EB/84/1F/4028C58B9AEDBF0F105148937A_1654667029926.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Plastic Glass Making Machine",
//                                     price: "₹ 71,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/7A/4E/7E/F798B8235D74B680DC816D5744_1654665625018.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Paper Cup Making Machine",
//                                     price: "₹ 45,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/EA/FF/01/51E087D00E72DBF85FC5D4CA45_1654666249809.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Thermocol Plate Making Machine",
//                                     price: "₹ 37,000",
//                                     img: "https://image2.jdomni.in/banner/08062022/7D/54/B4/92C16EF585B66990A58E6A5CF1_1654666627689.png?output-format=webp"
//                                 },
//                                 {
//                                     title: "Dona Making Machine",
//                                     price: "₹ 29,000",
//                                     img: "https://image3.jdomni.in/banner/08062022/EB/84/1F/4028C58B9AEDBF0F105148937A_1654667029926.png?output-format=webp"
//                                 }
//                             ].map((item, index) => (
//                                 <div key={index} className="min-w-[180px] bg-gradient-to-tr from-yellow-700 to-yellow-500 rounded-lg p-4 relative flex-shrink-0">
//                                     <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
//                                         New
//                                     </div>
//                                     <img alt={item.title} className="mx-auto mb-3 h-[120px] w-[160px] object-contain" src={item.img} />
//                                     <h4 className="text-xs text-white font-semibold mb-1">{item.title}</h4>
//                                     <p className="text-xs text-white font-semibold mb-1">{item.price}</p>
//                                     <div className="flex justify-between text-xs text-white font-semibold">
//                                         <a className="hover:underline" href="#">View Details</a>
//                                         <a className="hover:underline" href="#">Buy Now</a>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 </Container>

//             </div>
//         </>
//     )
// }
