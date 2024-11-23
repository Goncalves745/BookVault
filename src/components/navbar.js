import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-6">
        <Link to="/" className="text-lg">Home</Link>
        <Link to="/books" className="text-lg">Books</Link>
        <Link to="/bookclub" className="text-lg">Bookclub</Link>
      </div>
      <div className="flex space-x-6 items-center text-2xl font-semibold">BookVault</div>
      <div className="flex space-x-6 items-center">
        <Link to="/add-book">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Book
          </button>
        </Link>
        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
          <span className="text-white">U</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;