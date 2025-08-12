function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center h-[70vh] bg-gradient-to-b from-blue-50 to-blue-200">
            <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg text-center border-t-4 border-yellow-400">
                <div className="text-5xl mb-4">🏦</div>
                <h1 className="text-3xl font-bold text-blue-900 mb-2">
                    Your Trusted Partner in Banking
                </h1>
                <p className="text-gray-600">
                    Secure. Reliable. Designed for your financial success.
                </p>
            </div>
        </div>
    )
}

export default Homepage;
