import React, { Component } from "react";
import "./Book.css";
import Axios from "axios";

class Book extends Component {

	constructor(props){
		super(props);
		this.state = {
			description: "Fecting description for this book ... ",
			error: ""
		};
	};

	componentDidMount() {
		this.getDescription();
	};

	getDescription = () => {
		const bookId = this.props.bookData.best_book.id;
		const apiKey = "iFBP3pW7lQSCL8PY0x8ng";
		const requestUri =  
			`https://cors-anywhere.herokuapp.com/` +
	      	`https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`;

		Axios.get(requestUri)
      		.then(res => {
      			this.parseXMLresponse(res.data);
      		})
      		.catch(error => {
	        	this.setState({
	          	error: error.toString()
	        });
	    });
	};

	parseXMLresponse = (data) =>{
		const parser = new DOMParser();
        const XMLResponse = parser.parseFromString(data, "application/xml");
        const parseError = XMLResponse.getElementsByTagName("parsererror");

        if (parseError.length) {
          	this.setState({
            	error: "There was an error fetching results."
          	});
        } else {
          	let description = XMLResponse.getElementsByTagName("description")[0].innerHTML;
			description = description.replace("<![CDATA[", "").replace("]]>", "");

          	if (!description) {
            	description = "No description found.";
          	}
          	this.setState({ description });
        }
	};

	render() {
		const { bookData } = this.props;
		return (
			<article className="cf mh6-l ph5-l mv5-l pv5-l mh3-m ph3-m mv3-m pv3-m mh2 ph2 mv2 pv2 bg-white br4">
			<div>
				<a className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black" onClick={this.props.collapseBook} href='##'>Go Back</a>
			</div>	
			<h1 className="mb4 mt0 lh-title tc-m">{bookData.best_book.title}</h1>
			<header className="fn fl-ns w-30-l w-100 w-60-m pr4-l mh6-m mt3">
				<div className='ba'>
	    			<img src={bookData.best_book.image_url} alt="book" className='tc w-100 bt bb' style={{'height': '300px'}} />
	    			<div className='tc'>
	    				<p className='pv2 ma0 bb'>Author  :  {bookData.best_book.author.name}</p>
	    				<p className='pv2 ma0 bb'>Avg. Rating  :  {bookData.average_rating}</p>
	    				<p className='pv2 ma0'>Published Date: {`${bookData.original_publication_day}/${bookData.original_publication_month}/${bookData.original_publication_year}`}</p>
	    			</div>
    			</div>
			</header>
			  	<div className="fn fl-ns w-70-l w-100">
				    <p clasNames="lh-copy mt4 mt0-ns pr2 fw6 f3 measure-wide">
				      	{(this.state.error && (<p className="red">{this.state.error}</p>)) || (<p dangerouslySetInnerHTML={{ __html: this.state.description }} />)}
				    </p>
				    <h3>
				    	<a href={`https://www.goodreads.com/book/show/${bookData.best_book.id}`} className="link dim blue">
				    		Learn More
				    	</a>
				    </h3>
			  	</div>
			</article>
		)
	}
}

export default Book;