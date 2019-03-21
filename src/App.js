import React, { Component } from 'react';
import Searchbox from './components/Searchbox/Searchbox.js';
import Book from './components/Book/Book.js';
import './App.css';

class App extends Component {

	state = {
		results: [],    			//array of all the books obtained
		expandedBook: null			//variable wich stores book data when some book is opened
	};

	setResults = (results) => {		//called when something is searched
		this.setState({results});
	};

	collapseBook = () => {				//called when book info page is closed
		this.setState({
			expandedBook: null
		});
	};

	expandBook = expandedBook => {			//called when some book is opened
		this.setState({expandedBook});
	};

	render() {
	    return (
	      	<div>
		      	{this.state.expandedBook ? 
		      		(
		      			<Book 
			      			bookData={this.state.expandedBook}
			      			collapseBook={this.collapseBook} 
		      			 />
		      		)
		      	:
			      	(	
				        <Searchbox 
				        	results={this.state.results}
			              	setResults={this.setResults}
			              	expandBook={this.expandBook}
				        />
				    )
			    }
	      	</div>
	    );
	}
}

export default App;
