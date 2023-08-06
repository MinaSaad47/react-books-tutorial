import React, { useEffect, useState } from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';

import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    console.log(books);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title });
        setBooks([...books, response.data]);
    };

    const editBook = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, { title });
        setBooks([...books.filter((book) => book.id !== id), response.data]);
    };

    const deleteBook = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        setBooks(books.filter((book) => book.id !== id));
    };

    useEffect(fetchBooks, []);

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;