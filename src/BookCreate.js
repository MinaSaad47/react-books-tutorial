import React, { useState } from 'react';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
    };

    return (
        <div className='book-create'>
            <form onSubmit={handleSubmit}>
                <h3>Create a Book</h3>
                <input className="input" value={title} onChange={handleChange} />
                <button className='button' onSubmit={handleSubmit}>Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;