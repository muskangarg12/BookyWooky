(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(51)},25:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),s=a.n(o),c=(a(25),a(2)),l=a(3),i=a(6),m=a(4),p=a(5),h=a(10),b=a(11),u=a(8),d=a.n(u),f=(a(45),function(e){var t=e.bookData,a=e.expandBook,n=t.best_book.title,o=n.substring(0,12);return n.length>o.length&&(o+="..."),r.a.createElement("article",{className:"br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 dib ma2  bg-white"},r.a.createElement("img",{src:t.best_book.image_url,className:"db w-100 br2 br--top ma3",alt:"BOOK COVER",style:{height:"300px",width:"222px"}}),r.a.createElement("div",{className:"pa2 ph3-ns pb3-ns"},r.a.createElement("div",{className:"dt w-100 mt1"},r.a.createElement("div",{className:"dtc"},r.a.createElement("h1",{className:"f5 f4-ns mv0"},r.a.createElement("span",{className:"hint--bottom","aria-label":o.includes("...")?n:""},o)))),r.a.createElement("p",{className:"f6 lh-copy measure mt2 mid-gray"},t.best_book.author.name),r.a.createElement("a",{className:"f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue",onClick:function(){return a(t)},href:"##"},"More Info")))}),g=(a(46),function(e){var t=e.books,a=e.expandBook;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(f,{bookData:e,key:e.id,expandBook:a})}))}),k=(a(47),"iFBP3pW7lQSCL8PY0x8ng"),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:"",error:"",fetchingData:!1},a.onTextChange=function(e){a.setState({searchText:e.target.value})},a.onButtonClick=function(){a.setState({fetchingData:!0});var e=a.state.searchText,t="https://cors-anywhere.herokuapp.com/"+"https://www.goodreads.com/search/index.xml?key=".concat(k,"&q=").concat(e);d.a.get(t).then(function(e){a.parseXMLResponse(e.data)}).catch(function(e){a.setState({error:e.toString(),fetchingData:!1})})},a.parseXMLResponse=function(e){var t=(new DOMParser).parseFromString(e,"application/xml");if(t.getElementsByTagName("parsererror").length)a.setState({error:"There was an error fetching results.",fetchingData:!1});else{var n=Object(h.a)(Array,Object(b.a)(t.getElementsByTagName("work"))).map(function(e){return a.XMLToJson(e)});a.setState({fetchingData:!1},function(){a.props.setResults(n)})}},a.XMLToJson=function(e){var t=Object(h.a)(Array,Object(b.a)(e.children)),n={};return t.forEach(function(e){e.children.length?n[e.nodeName]=a.XMLToJson(e):n[e.nodeName]=e.innerHTML}),n},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pa4-l pt5-l tc pa3-m pa2"},r.a.createElement("div",{className:"bg-light-red mw7 center pa4 br2-ns ba b--black-10"},r.a.createElement("fieldset",{className:"cf bn ma0 pa0"},r.a.createElement("legend",{className:"pa0 f5 f3-ns mb3 black-80 bold fw7"},"WELCOME TO THE BOOKYWOOKY"),r.a.createElement("div",{className:"cf"},r.a.createElement("input",{className:" f4 input-reset bn fl black-80 bg-white pa3 lh-solid w-80-l w-100 w-75-m tc br2-ns br--left-ns",placeholder:"Search Books By title, author, or ISBN...",onChange:this.onTextChange,type:"text",value:this.state.searchText}),r.a.createElement("button",{className:"f4 f3-ns button-reset fl pv3 tc bn pa3 bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns grow",onClick:this.onButtonClick},"Search")))),this.state.fetchingData?r.a.createElement("h1",{className:"ld bold tc fw8 pt6"},"loading... "):this.state.error&&r.a.createElement("h1",{className:"red bold pt5"},this.state.error)||r.a.createElement(g,{books:this.props.results,expandBook:this.props.expandBook}))}}]),t}(n.Component),v=(a(48),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getDescription=function(){var e=a.props.bookData.best_book.id,t="https://cors-anywhere.herokuapp.com/"+"https://www.goodreads.com/book/show/".concat(e,"?key=").concat("iFBP3pW7lQSCL8PY0x8ng");d.a.get(t).then(function(e){a.parseXMLresponse(e.data)}).catch(function(e){a.setState({error:e.toString()})})},a.parseXMLresponse=function(e){var t=(new DOMParser).parseFromString(e,"application/xml");if(t.getElementsByTagName("parsererror").length)a.setState({error:"There was an error fetching results."});else{var n=t.getElementsByTagName("description")[0].innerHTML;(n=n.replace("<![CDATA[","").replace("]]>",""))||(n="No description found."),a.setState({description:n})}},a.state={description:"Fecting description for this book ... ",error:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getDescription()}},{key:"render",value:function(){var e=this.props.bookData;return r.a.createElement("article",{className:"cf mh6-l ph5-l mv5-l pv5-l mh3-m ph3-m mv3-m pv3-m mh2 ph2 mv2 pv2 bg-white br4"},r.a.createElement("div",null,r.a.createElement("a",{className:"f6 link dim br2 ph3 pv2 mb2 dib white bg-black",onClick:this.props.collapseBook,href:"##"},"Go Back")),r.a.createElement("h1",{className:"mb4 mt0 lh-title tc-m"},e.best_book.title),r.a.createElement("header",{className:"fn fl-ns w-30-l w-100 w-60-m pr4-l mh6-m mt3"},r.a.createElement("div",{className:"ba"},r.a.createElement("img",{src:e.best_book.image_url,alt:"book",className:"tc w-100 bt bb",style:{height:"300px"}}),r.a.createElement("div",{className:"tc"},r.a.createElement("p",{className:"pv2 ma0 bb"},"Author  :  ",e.best_book.author.name),r.a.createElement("p",{className:"pv2 ma0 bb"},"Avg. Rating  :  ",e.average_rating),r.a.createElement("p",{className:"pv2 ma0"},"Published Date: ","".concat(e.original_publication_day,"/").concat(e.original_publication_month,"/").concat(e.original_publication_year))))),r.a.createElement("div",{className:"fn fl-ns w-70-l w-100"},r.a.createElement("p",{clasNames:"lh-copy mt4 mt0-ns pr2 fw6 f3 measure-wide"},this.state.error&&r.a.createElement("p",{className:"red"},this.state.error)||r.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.description}})),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://www.goodreads.com/book/show/".concat(e.best_book.id),className:"link dim blue"},"Learn More"))))}}]),t}(n.Component)),E=(a(49),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={results:[],expandedBook:null},a.setResults=function(e){a.setState({results:e})},a.collapseBook=function(){a.setState({expandedBook:null})},a.expandBook=function(e){a.setState({expandedBook:e})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.expandedBook?r.a.createElement(v,{bookData:this.state.expandedBook,collapseBook:this.collapseBook}):r.a.createElement(w,{results:this.state.results,setResults:this.setResults,expandBook:this.expandBook}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.88a11882.chunk.js.map