import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-hot-toast";

const Fashion = () => {
    const products = [
        { id: 1, name: "Men's T-Shirt", price: 14.99, image: "https://img.freepik.com/free-photo/man-wearing-tshirt_23-2149393641.jpg" },
        { id: 2, name: "Women's Dress", price: 29.99, image: "https://img.freepik.com/free-photo/woman-wearing-dress_23-2149133969.jpg" },
        { id: 3, name: "Men's Sneakers", price: 49.99, image: "https://img.freepik.com/free-photo/mens-sneakers_23-2150583931.jpg" },
        { id: 4, name: "Women's Jacket", price: 59.99, image: "https://img.freepik.com/free-photo/womens-jacket_23-2149393641.jpg" },
        { id: 5, name: "Men's Sunglasses", price: 19.99, image: "https://img.freepik.com/free-photo/mens-sunglasses_23-2148674251.jpg" }
    ];
    
    const [cart, setCart] = useState({});

    const addToCart = (productId) => {
        if (!cart[productId]) {
            setCart((prevCart) => ({
                ...prevCart,
                [productId]: 1,
            }));
        }
        toast.success("Added to Cart");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
            <h1 className="text-3xl font-bold mb-6">Fashion Wear</h1>
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

export default Fashion;
