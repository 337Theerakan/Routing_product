import { Link } from '@inertiajs/react';

export default function Index({ productions }) {
    return (
        <div className="container mx-auto p-4 bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-indigo-600">Product Book</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productions.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                        <Link href={`/products/${product.id}`}>
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold text-indigo-600">{product.name}</h2>
                                <p className="text-lg text-gray-700">${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <Link href="/dashboard">
                    <button className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">Back to Dashboard</button>
                </Link>
            </div>
        </div>
    );
}
