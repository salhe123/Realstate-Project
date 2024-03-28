import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-5xl mx-auto p-3">
        <Link to='/'>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Alem</span>
            <span className="text-slate-700">State</span>

        </h1>
        </Link>
       
        <form className="bg-slate-100 border-slate-400 p-3 rounded-lg flex items-center ">
            <input type="search" placeholder="Search.." className="bg-transparent focus:outline-none w-25 sm:w-64" />
            <button><FaSearch className='text-slate-500'/></button>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className='sm:inline text-slate-700 hover:underline hover:cursor-pointer'>Sign in</li>
            </Link>

        </ul>
        </div>
       
    </header>
  )
}
