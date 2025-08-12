function BankDetailpage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 py-10">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg border-t-4 border-yellow-400">
                <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                    Your Account Detail
                </h1>

                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <tbody>
                        <tr className="bg-blue-100">
                            <th className="p-3 text-left text-blue-900 font-semibold border border-gray-300">
                                Name
                            </th>
                            <td className="p-3 border border-gray-300 text-gray-700">Shyam Dev</td>
                        </tr>
                        <tr>
                            <th className="p-3 text-left text-blue-900 font-semibold border border-gray-300">
                                Number
                            </th>
                            <td className="p-3 border border-gray-300 text-gray-700">96575876</td>
                        </tr>
                        <tr className="bg-blue-100">
                            <th className="p-3 text-left text-blue-900 font-semibold border border-gray-300">
                                Branch
                            </th>
                            <td className="p-3 border border-gray-300 text-gray-700">HDFC</td>
                        </tr>
                        <tr>
                            <th className="p-3 text-left text-blue-900 font-semibold border border-gray-300">
                                Balance
                            </th>
                            <td className="p-3 border border-gray-300 text-gray-700">7000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BankDetailpage;
