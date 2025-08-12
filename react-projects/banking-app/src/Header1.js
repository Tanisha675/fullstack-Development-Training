import {Link} from 'react-router-dom'
function Header1() {
    return (
        <div className="bg-blue-900 flex justify-center gap-4 py-4 border-b-2 border-yellow-400">
            <Link to='/'>
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Home
            </button>
            </Link>
            <Link to='/CreateAccountpage'>
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Create Account
            </button>
            </Link>
            <Link to='/Loginpage'>
             <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Login
            </button>
            </Link>
        </div>
    )
}

export default Header1;
