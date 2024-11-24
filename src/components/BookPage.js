import React from "react";
import { useLocation } from "react-router";

const BookPage = () => {
  const location = useLocation();
  const book = location.state?.book;

  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">No book details available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Book Cover */}
        {book.isbn && (
          <img
            src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`}
            alt={`${book.title} cover`}
            className="w-full md:w-1/3 object-cover"
            loading="lazy"
          />
        )}

        {/* Book Details */}
        <div className="flex flex-col flex-grow p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h1>
          {book.author_name && (
            <p className="text-gray-600 text-lg mb-4">
              <strong>Author:</strong> {book.author_name.join(", ")}
            </p>
          )}
          {book.first_publish_year && (
            <p className="text-gray-600 text-sm">
              <strong>Published:</strong> {book.first_publish_year}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookPage;