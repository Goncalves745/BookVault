import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import BookSearch from './components/booksearch';
import HomePage from './components/homepage';
import BookPage from './components/BookPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/books" element={<div>BooksPage</div>} />
        <Route path="/bookclub" element={<div>Bookclub Page</div>} />
        <Route path="/add-book" element={<BookSearch />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </Router>
  );
};

export default App;