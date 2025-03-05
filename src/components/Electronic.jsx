import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const products = [
    { id: 1, name: "Iphone", price: 599.99, image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg" },
    { id: 2, name: "Laptop", price: 999.99, image: "https://img.freepik.com/free-photo/programming-background-concept_23-2150170143.jpg" },
    { id: 3, name: "Headphones", price: 149.99, image: "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg" },
    { id: 4, name: "Smart TV", price: 799.99, image: "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072206.jpg" },
    { id: 5, name: "Tablet", price: 349.99, image: "https://img.freepik.com/free-photo/headphones-with-minimalist-monochrome-background_23-2150763315.jpg" },
    { id: 6, name: "Smartwatch", price: 199.99, image: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722649.jpg" }
];

const Electronic = () => {
    const [cart, setCart] = useState({});

    const addToCart = (productId) => {
        setCart((prevCart) => ({
            ...prevCart,
            [productId]: (prevCart[productId] || 0) + 1,
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
            <h1 className="text-3xl font-bold mb-6">Electronics</h1>
            <div className="max-w-6xl w-full px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="p-4 bg-white border rounded-lg shadow-md text-center">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-3 rounded-md" />
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            <button
                                onClick={() => addToCart(product.id)}
                                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center w-full"
                            >
                                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Electronic;