import React, { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(book.id);
    };

    const handleEdit = () => {
        setShowEdit(!showEdit);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onEdit={onEdit} />;
    }

    onEdit = (...args) => {
        onEdit(...args);
        setShowEdit(!showEdit);
    };

    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/300/300`} alt='books' />
            <div>{content}</div>
            <div className='actions'>
                <button className='edit' onClick={handleEdit}>Edit</button>
                <button className='delete' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;