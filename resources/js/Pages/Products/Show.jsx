import { Link } from '@inertiajs/react';

export default function Show({ production }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300">
            <div className="container mx-auto p-6 max-w-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4 text-indigo-600">{production.name}</h1>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={production.image}
                        alt={production.name}
                        className="w-full h-72 object-cover border-b"
                    />
                    <div className="p-6">
                        <p className="text-gray-700 text-lg mb-6 text-justify">
                            {production.description}
                        </p>
                        <p className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
                            Price: ${production.price}
                        </p>
                        <div className="text-center">
                            <Link href="/products">
                                <button className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
                                    Back to Products
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
