function CreateAccountpage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 py-10">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-yellow-400">
                <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                    Create your Bank Account
                </h1>
                <form className="flex flex-col gap-4">
                    <label className="font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <label className="font-medium text-gray-700">Mobile Number</label>
                    <input
                        type="number"
                        placeholder="Enter your Number"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <label className="font-medium text-gray-700">Select Branch</label>
                    <input
                        type="text"
                        placeholder="Enter your Branch"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <label className="font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Make a Strong Password"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-yellow-400 text-blue-900 font-semibold py-2 rounded-lg hover:bg-yellow-300 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccountpage;
