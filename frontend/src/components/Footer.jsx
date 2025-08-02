import React from 'react'
import { FaPhoneAlt, FaStar } from 'react-icons/fa';
import {
    FaWhatsapp,
    FaEnvelope,
    FaShippingFast,
    FaShieldAlt,
    FaPlane,
    FaUserShield,
} from "react-icons/fa";
import Container from './Container';

export default function Footer() {
    return (
        <>
            <Container>
                <footer className="  px-4 md:px-20 py-10">
                    <div className="max-w-md mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className=" space-x-3">
                            <img
                                alt="Nirali Food Processing logo in footer"
                                className="h-40 w-auto"
                                src="/images/bmilogo.jpg"
                            />
                            <div className=" text-gray-600 max-w-xs">
                                25+ years of trust. Over 400k happy customers. 100+ unique styles.
                                Industry leader in food processing machines and equipment manufacturing.
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-3xl font-bold text-gray-800">4.9</div>
                            <div className="text-xs text-gray-600">Reviews on</div>
                            <img
                                alt="Google logo"
                                className="w-24 h-auto"
                                src="https://storage.googleapis.com/a1aa/image/7686f6b3-77e8-47ec-d758-19dca33554d3.jpg"
                            />
                            <button className="bg-gray-900 text-white text-xs px-4 py-1 rounded mt-1 hover:bg-gray-800 transition">
                                READ REVIEWS
                            </button>
                        </div>
                    </div>

                    {/* Latest from Blog */}
                    <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-3">
                        <div>
                            
                            <img
                                alt="Chef cooking in kitchen blog image"
                                className="rounded w-full"
                                src="https://storage.googleapis.com/a1aa/image/dddf6c37-febc-4acb-deae-23adeb946bad.jpg"
                            />
                        </div>
                      <div className='space-y-3'>
                        <h4 className="text-[30px] font-semibold mb-2">LATEST FROM BLOG</h4>
                          <p className="mt-2 text-justify">
                            How to choose the best food processing machine for your business? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aspernatur cum harum in eaque quidem dicta animi explicabo obcaecati dolor dolorem illum ratione doloribus perferendis, eveniet ipsa modi quaerat totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo sint velit veritatis cumque ducimus dignissimos possimus officia accusantium ut expedita, facilis nostrum, quisquam ad vero numquam ea dolore in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum impedit molestias tempore animi et id voluptatum ipsum placeat, iure, praesentium similique beatae, voluptates accusantium obcaecati dolore voluptatem? Accusantium, ex.
                        </p>
                      </div>
                    </div>

                    {/* Testimonials */}
                    <div className="mt-10">
                        <h4 className=" font-semibold mb-4">Testimonials</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    text: "Nirali Food Processing machines have transformed our kitchen operations. Highly recommend!",
                                    name: "- Ramesh K."
                                },
                                {
                                    text: "Great customer service and reliable machines. Our business efficiency improved drastically.",
                                    name: "- Deepa S."
                                },
                                {
                                    text: "Excellent quality and fast delivery. The machines are easy to operate and maintain.",
                                    name: "- Anil M."
                                }
                            ].map((testimonial, index) => (
                                <div key={index} className="bg-white p-4 rounded shadow text-gray-700">
                                    <div className="flex items-center mb-2 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <p>{testimonial.text}</p>
                                    <p className="mt-2 font-semibold">{testimonial.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Footer Links */}
                    <div className="mt-10 border-t border-gray-300 pt-6 text-xs text-gray-600">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="flex space-x-4">
                                <a className="hover:underline" href="#">Privacy Policy</a>
                                <a className="hover:underline" href="#">Terms of Service</a>
                                <a className="hover:underline" href="#">Return Policy</a>
                            </div>
                            <div className="flex space-x-4">
                                <a className="hover:underline" href="#">Contact Us</a>
                                <a className="hover:underline" href="#">FAQ</a>
                                <a className="hover:underline" href="#">Support</a>
                            </div>
                        </div>
                        <footer className=" text-gray-700">
                            {/* Top Icons Row */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center py-6 border-b border-gray-200">
                                <div className="flex flex-col items-center">
                                    <FaShippingFast className="text-2xl mb-1" />
                                    <p className="font-semibold">FREE SHIPPING</p>
                                    <p className="text-sm text-gray-500">Free shipping on all orders</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaShieldAlt className="text-2xl mb-1" />
                                    <p className="font-semibold">1 Year Motor Warranty</p>
                                    <p className="text-sm text-gray-500">1-Year Motor Warranty for Assurance</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaPlane className="text-2xl mb-1" />
                                    <p className="font-semibold">Nation-Wide Delivery</p>
                                    <p className="text-sm text-gray-500">Fast, Seamless Delivery Across India</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaUserShield className="text-2xl mb-1" />
                                    <p className="font-semibold">100% PAYMENT SECURE</p>
                                    <p className="text-sm text-gray-500">We ensure secure payment</p>
                                </div>
                            </div>

                            {/* Bottom Grid Links */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-6 py-8 text-sm">
                                {/* Get in Touch */}
                                <div>
                                    <h3 className="font-semibold mb-2">Get in touch</h3>
                                    <div className="flex items-center space-x-2 mb-1">
                                        <FaWhatsapp />
                                        <span>Whatsapp Us</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mb-1">
                                        <FaPhoneAlt />
                                        <span>Call Us</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FaEnvelope />
                                        <span>Mail Us</span>
                                    </div>
                                </div>

                                {/* Categories */}
                                <div>
                                    <h3 className="font-semibold mb-2">Categories</h3>
                                    <ul className="space-y-1">
                                        <li>Bakery</li>
                                        <li>Namkeen</li>
                                        <li>Dairy & Sweets</li>
                                        <li>Restaurant & Kitchen</li>
                                    </ul>
                                </div>

                                {/* Quick Links */}
                                <div>
                                    <h3 className="font-semibold mb-2">Quick Links</h3>
                                    <ul className="space-y-1">
                                        <li>Shop</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                        <li>Become a Distributer</li>
                                        <li>FAQs</li>
                                    </ul>
                                </div>

                                {/* Our Policies */}
                                <div>
                                    <h3 className="font-semibold mb-2">Our Policies</h3>
                                    <ul className="space-y-1">
                                        <li>Privacy Policy</li>
                                        <li>Terms Of Service</li>
                                        <li>Warranty Policy</li>
                                        <li>Return and Refund</li>
                                        <li>Shipping Policy</li>
                                    </ul>
                                </div>

                                {/* Customer Support */}
                                <div>
                                    <h3 className="font-semibold mb-2">Customer Support</h3>
                                    <p>Support Hours:</p>
                                    <p>Thur to Tue: 10AM – 6PM</p>
                                    <p className="mt-2">support@business.com</p>
                                </div>
                            </div>

                            {/* Bottom Copyright */}
                            <div className="text-center py-4 text-xs border-t border-gray-200">
                                © 2025 <span className="text-blue-600 font-medium uppercase">Business Machine India Pvt Ltd</span>. ALL RIGHTS RESERVED
                            </div>
                        </footer>
                    </div>
                </footer>
            </Container>
        </>
    )
}
