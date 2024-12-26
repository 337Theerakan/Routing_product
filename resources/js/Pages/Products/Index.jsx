import { Link } from '@inertiajs/react';

export default function Index({ productions }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-yellow-300 flex flex-col items-center">
            {/* Header */}
            <header className="w-full bg-white shadow-lg py-8 mb-12">
                <h1 className="text-5xl font-extrabold text-center text-indigo-700 tracking-wider">
                    Product Book
                </h1>
                <p className="text-center text-gray-600 mt-2 text-lg">
                    มันคือหนังสือ..เป็นได้เเค่หนังสือจริงๆน่ะ
                </p>
            </header>

            {/* Product Grid */}
            <main className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {productions.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-2xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg"
                        >
                            <Link href={`/products/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-5 text-center">
                                    <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                                        {product.name}
                                    </h2>
                                    <p className="text-xl text-gray-700 font-medium mb-3">
                                        ${product.price}
                                    </p>
                                    <button className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
                                        View Details
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            {/* Back to Dashboard Button */}
            <footer className="w-full mt-12 text-center">
                <Link href="/dashboard">
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-4 rounded-full shadow-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition duration-300">
                        Back to Dashboard
                    </button>
                </Link>
            </footer>
        </div>
    );
}
