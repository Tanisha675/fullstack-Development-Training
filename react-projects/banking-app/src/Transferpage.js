function Transferpage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-yellow-400">
                <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                    Transfer Money Between Accounts
                </h1>

                <div className="flex flex-col space-y-4">
                    <label className="font-medium text-blue-900">From Account</label>
                    <input
                        type="number"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <label className="font-medium text-blue-900">To Account</label>
                    <input
                        type="number"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <label className="font-medium text-blue-900">Amount</label>
                    <input
                        type="number"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-yellow-400 text-blue-900 font-semibold py-2 rounded-lg hover:bg-yellow-300 transition"
                    >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Transferpage;
