import React, { useEffect, useState } from "react";
import bookCard from "./bookCard.png"

function Book(props){
    const [inputText,setInputText]=useState("");
    const [foundBook,setFoundBook]=useState([]);
    const [allBooks,populateBooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/api/browse", { method: 'GET' })
        .then(data => data.json()) 
        .then(json => { populateBooks([...json])})

    },[])
    function handleTitleClick(){
       
        console.log(inputText);
        fetch("http://localhost:4000/api/browse/title/"+inputText, { method: 'GET' })
        .then(data => data.json()) 
        .then(json => {setFoundBook([...json])})
    }
    function handleCategoryClick(){
        fetch("http://localhost:4000/api/browse/category/"+inputText, { method: 'GET' })
        .then(data => data.json()) 
        .then(json => {setFoundBook([...json])})
    }

    function handleAuthorClick(){
        fetch("http://localhost:4000/api/browse/author/"+inputText, { method: 'GET' })
        .then(data => data.json()) 
        .then(json => {setFoundBook([...json])})
    }
    
    function handleInputText(event){
           setInputText(event.target.value);
           
    }
    function book(element){
           if(element){
      console.log(element);
      function handleElement(){
        return <button className="btn btn-sm btn-success button-issue">Issue</button>
      }
      return <div className="bookCard">
       
        
          <h3 >{element.title}</h3>
          <div >
          <img className="bookImgCard" src={bookCard} alt="bookimg" height="80" width="80"  />
            <p className="browseCardText"><span>Title</span> :{element.title}</p>
            <p className="browseCardText"><span>Author</span>: {element.author}</p>
            <p className="browseCardText"><span>Publication</span>: {element.publication}</p>
            <p className="browseCardText">{element.issued?"Book is already issued":"Not issued"}</p>
            {props.issue=="yes"?handleElement():null}
          
          </div>

        </div>
           }
    }
    return <div><div className="browseUpper">
      <input className="browserInput" type="text" placeholder="Search" onChange={handleInputText}/>
        <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Browse
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" onClick={handleAuthorClick}>Author</a>
    <a className="dropdown-item" onClick={handleCategoryClick}>Category</a>
    <a className="dropdown-item" onClick={handleTitleClick}>Title</a>
  </div>
</div>
     
    </div>
    <div>
    {foundBook.map(book)}
    </div>
    <h2 className="headingBooks" >Books</h2>
    <div className="browseBooks">
      {allBooks.map(book)}
    </div>
    </div>
}

export default Book;