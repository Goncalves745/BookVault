import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { searchBooks } from './api';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const data = await searchBooks(query);
      if (data && data.docs.length > 0) {
        setBooks(data.docs);
      } else {
        setError('No results found');
        setBooks([]);
      }
    } catch {
      setError('Error fetching books');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a book..."
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className={`px-4 py-2 bg-lime-800 hover:bg-lime-700 text-white rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {books.map((book) => (
          <li
            key={book.key}
            className="bg-neutral-790  shadow-md rounded-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={
               book.isbn && book.isbn[0]
                ? `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`
                :  "https://via.placeholder.com/128x192.png?text=No+Cover"
              } 
              alt={`${book.title} cover`}
              className="w-32 h-48 object-cover rounded mb-4"
              loading="lazy"
              />
            
            <h3 className="text-lg font-semibold text-white mb-2">{book.title}</h3>
            <p className="text-sm text-white">
              {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
            </p>
            <button
              onClick={() => navigate('/book', { state: { book } })} // Pass book data
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-lime-800 transition duration-200"
            >
              Add Book 
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;