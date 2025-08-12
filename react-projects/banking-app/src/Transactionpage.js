function Transactionpage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 py-10">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-5xl border-t-4 border-yellow-400">
                <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                    Your Bank Transactions
                </h1>

                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-blue-900 text-white">
                        <tr>
                            <th className="p-3 border border-gray-300">S.No</th>
                            <th className="p-3 border border-gray-300">Date</th>
                            <th className="p-3 border border-gray-300">Amount</th>
                            <th className="p-3 border border-gray-300">Transfer Type</th>
                            <th className="p-3 border border-gray-300">Account No</th>
                            <th className="p-3 border border-gray-300">Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-50">
                            <td className="p-3 border border-gray-300 text-center">1</td>
                            <td className="p-3 border border-gray-300 text-center">2025-08-01</td>
                            <td className="p-3 border border-gray-300 text-center text-green-600 font-semibold">₹5,000</td>
                            <td className="p-3 border border-gray-300 text-center">Credit</td>
                            <td className="p-3 border border-gray-300 text-center">9876543210</td>
                            <td className="p-3 border border-gray-300 text-center">TXN001245</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300 text-center">2</td>
                            <td className="p-3 border border-gray-300 text-center">2025-08-03</td>
                            <td className="p-3 border border-gray-300 text-center text-red-600 font-semibold">₹1,200</td>
                            <td className="p-3 border border-gray-300 text-center">Debit</td>
                            <td className="p-3 border border-gray-300 text-center">1234567890</td>
                            <td className="p-3 border border-gray-300 text-center">TXN001246</td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="p-3 border border-gray-300 text-center">3</td>
                            <td className="p-3 border border-gray-300 text-center">2025-08-07</td>
                            <td className="p-3 border border-gray-300 text-center text-green-600 font-semibold">₹15,000</td>
                            <td className="p-3 border border-gray-300 text-center">Credit</td>
                            <td className="p-3 border border-gray-300 text-center">9876543210</td>
                            <td className="p-3 border border-gray-300 text-center">TXN001247</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Transactionpage;
