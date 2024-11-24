import React from 'react';
import { Link } from 'react-router-dom';
import userlogo from '../files/image.png'

const   Navbar = () => {
  return (
    <nav className="bg-neutral-780 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-6">
        <Link to="/books" className="text-lg">Books</Link>
        <Link to="/bookclub" className="text-lg">Bookclub</Link>
      </div>
      <div className="flex space-x-6 items-center text-3xl font-semibold">
        <Link to ="/" className='text-pretty'>BookVault</Link>
      </div>
      <div className="flex space-x-6 items-center">
        <Link to="/add-book">
          <button className="bg-lime-800 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
            Add Book 
          </button>
        </Link>
        <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
          <img src={userlogo} alt="User Logo" className="h-10 w-10 object-cover rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;