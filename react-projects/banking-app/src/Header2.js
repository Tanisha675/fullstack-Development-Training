import {Link} from 'react-router-dom'
function Header2() {
    return (
        <div className="bg-blue-900 flex justify-center gap-4 py-4 border-b-2 border-yellow-400">
            <Link to="">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Home
            </button>
            </Link>
            <Link to="/bank-details">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Bank Detail
            </button>
            </Link>
            <Link to="transfer">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Transfer
            </button>
            </Link>
            <Link to="transactions">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Transaction
            </button>
            </Link>
            <Link to="/logout">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Logout
            </button>
            </Link>
        </div>
    )
}

export default Header2;

