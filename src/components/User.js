import React,{useEffect,useState} from "react";
import Book from "./Book";
import {useParams} from "react-router-dom"
import Man from "./man.png"
import Navigation from "./Navigation"
import Footer from "./Footer"

function User(){
    const {identity}=useParams()
    console.log(identity);
    const [userr,setUser]=useState([{name:"",userID:"",surname:"",email:"",phone:"",amountFine:"",books:[]}]);
    useEffect(()=>{
        fetch("http://localhost:4000/api/user/"+identity, { method: 'GET' })
        .then(data => data.json()) 
        .then(json => setUser(json));
         console.log("Hello");
         console.log(userr[0].name);
    },[])
    function handleBook(item){
      return <p className="browseCardText"><span>Book :</span>: {item.title}</p>
    }
    return <div className="User">
          <Navigation />
         <h2>Registered User</h2>
         <div className="bookCard">
       
        
       <h2 >{userr[0].name} {userr[0].surname}</h2>
       <div >
       <img className="bookImgCard" src={Man} alt="bookimg" height="80" width="80"  />
         <p className="browseCardText"><span>UserID : </span> :{userr[0].userID}</p>
         <p className="browseCardText"><span>Email : </span>: {userr[0].email}</p>
         <p className="browseCardText"><span>Phone Number :</span>: {userr[0].phone}</p>
         <p className="browseCardText"><span>Amount Fine :</span>: {userr[0].amountFine}</p>
         {(userr[0].books).map(handleBook)}
      
       
       </div>

     </div>
        <Book issue="yes"/>
        <Footer />
    </div>  
   
}

export default User;