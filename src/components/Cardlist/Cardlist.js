import React from 'react';
import Card from '../Card/Card.js';
import './Cardlist.css';

const Cardlist = ({ books, expandBook }) => {
  	return (
	    <div>
		    {books.map(book => (
		    	<Card bookData={book} key={book.id} expandBook={expandBook} />
		    ))}
	    </div>
  	);
}

export default Cardlist;
