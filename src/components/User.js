
import React,{useEffect,useState} from "react";
import Book from "./Book";
import {useParams} from "react-router-dom"
import Man from "./man.png"
import Navigation from "./Navigation"
import Footer from "./Footer"
import bookCard from "./bookCard.png"

function User(){
  const [inputText,setInputText]=useState("");
  const [foundBook,setFoundBook]=useState([]);
  const [allBooks,populateBooks]=useState([]);
  const [issue,setIssue]=useState(false);
    const {identity}=useParams()
    console.log(identity);
    const [userr,setUser]=useState({name:"",userID:"",surname:"",email:"",phone:"",amountFine:"",books:[]});
    useEffect(()=>{
        fetch("http://localhost:4000/api/user/"+identity, { method: 'GET' })
        .then(data => data.json()) 
        .then(json => setUser(json));
         console.log("Hello");
         console.log("USerName is" +userr.name);

         fetch("http://localhost:4000/api/browse", { method: 'GET' })
         .then(data => data.json()) 
         .then(json => { populateBooks([...json])})
    },[])
    useEffect(()=>{
      fetch("http://localhost:4000/api/user/"+identity, { method: 'GET' })
      .then(data => data.json()) 
      .then(json => {
        setUser(json)});
        fetch("http://localhost:4000/api/browse", { method: 'GET' })
        .then(data => data.json()) 
        .then(json => { populateBooks([...json])})
    },[issue])
    function handleBook(item){
      console.log("item is");
      console.log(item);
      return <p className="browseCardText"><span>Book :</span> {item.bookID}</p>
    }
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
function handleIssue(event){
  console.log("User id is "+userr._id);
  console.log("Book Id is"+event.target.value);
  fetch("http://localhost:4000/api/user/" + userr._id + "/" + event.target.value + "/issue", { method: "PUT" })
  .then(data => data.json())
  .then(json => {setIssue(!issue) });
}
function book(element){
    if(element){
console.log(element);

return <div className="bookCard">

 
   <h3 >{element.title}</h3>
   <div >
   <img className="bookImgCard" src={bookCard} alt="bookimg" height="80" width="80"  />
     <p className="browseCardText"><span>Title</span> :{element.title}</p>
     <p className="browseCardText"><span>Author</span>: {element.author}</p>
     <p className="browseCardText"><span>Publication</span>: {element.publication}</p>
     <p className="browseCardText">{element.issued?"Book is already issued":<button value={element._id} onClick={handleIssue} className="btn btn-sm btn-success">Issue</button>}</p>
     
   
   </div>

 </div>
    }
}
    return <div className="User">
          <Navigation />
         <h2>Registered User</h2>
         <div className="bookCard">
       
        
       <h2 >{userr.name} {userr.surname}</h2>
       <div >
       <img className="bookImgCard" src={Man} alt="bookimg" height="80" width="80"  />
         <p className="browseCardText"><span>UserID : </span> :{userr.userID}</p>
         <p className="browseCardText"><span>Email : </span>: {userr.email}</p>
         <p className="browseCardText"><span>Phone Number :</span>: {userr.phone}</p>
         <p className="browseCardText"><span>Amount Fine :</span>: {userr.amountFine}</p>
         {(userr.books).map(handleBook)}
      
       
       </div>

     </div>
     <div><div className="browseUpper">
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
        <Footer />
    </div>  
   
}

export default User;











