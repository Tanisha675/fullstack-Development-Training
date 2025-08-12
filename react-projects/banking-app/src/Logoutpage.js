function Logoutpage({ onLogout }) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
            <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md border-t-4 border-yellow-400">
                <h1 className="text-2xl font-bold text-blue-900 mb-4">
                    Logout Your Bank Account
                </h1>
                <p className="text-gray-700 mb-6">
                    Are you sure you want to log out of your account?  
                    You will need to log in again to access your banking services.
                </p>
                <button 
                    onClick={onLogout} 
                    className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-400 transition duration-300"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}

export default Logoutpage;
