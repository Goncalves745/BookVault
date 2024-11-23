import * as React from 'react'
import { useLocation } from 'react-router'


const BookPage = ()=>{

    const location = useLocation();
    const book = location.state?.book;

    return(
        <div>
            {book.isbn && (
                <div className="flex min-h-screen">
                <img
                  src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`}
                  alt={`${book.title} cover`}
                  className="w-1/3 h-auto object-cover rounded-lg mx-4 mt-8"
                  loading="lazy"
                />
                <div className="flex-grow p-8">
                  {/* Add content here */}
                </div>
              </div>
            )}
        </div>
    )

}

export default BookPage;