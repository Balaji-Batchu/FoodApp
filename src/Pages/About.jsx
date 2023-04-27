import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

export default function About(){
    return(
        <section className="bg-orange-200 py-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-2 text-pink-400">About Us</h2>
                <p className="text-xl mb-8 text-gray-700">
                We are a food delivery service that is passionate about bringing delicious meals to your doorstep. Our team is made up of experienced chefs and food enthusiasts who are dedicated to creating the perfect meal for every occasion.
                </p>
                <div className="flex mb-8">
                <div className="mr-16">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">Contact Us</h3>
                    <div className="flex items-center mb-4">
                    <FaPhoneAlt className="text-2xl text-gray-600 mr-2" />
                    <span className="text-lg text-gray-700">1-800-123-4567</span>
                    </div>
                    <div className="flex items-center mb-4">
                    <FaEnvelope className="text-2xl text-gray-600 mr-2" />
                    <a href="mailto:info@fooddelivery.com" className="text-lg text-gray-700">balajibachu2002@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                    <FaLocationArrow className="text-2xl text-gray-600 mr-2" />
                    <span className="text-lg text-gray-700">Vijayawada, A.P</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">Our Mission</h3>
                    <p className="text-xl text-gray-700">
                    Our mission is to make it easy and convenient for you to enjoy delicious meals from the comfort of your own home. We source only the freshest ingredients and work with local farmers and suppliers to support our community.
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}