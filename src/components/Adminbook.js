import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FormComponent from "./FormComponent";
import { Navigate } from "react-router-dom";

function AdminBook() {
  const [bookStat,setBookStat]=useState("")
    function handleSubmit(event) {
        event.preventDefault();
        var data=new URLSearchParams();
        function handleData(data){
      
            console.log(data.dataEntry);
            if(data.dataEntry=="Success"){
               setBookStat("Book added");
               //navigate("/user/"+event.target.UserID.value);
               //<Navigate to={"/browse"} replace={true} />
              }else{
                console.log("DO it Again");
            }
          }
        data.append("ISBN",event.target.number.value);
        data.append("title",event.target.bookName.value);
        data.append("author",event.target.author.value);
        data.append("category",event.target.category.value);
        data.append("issued",false);

        data.append("issuerID",null);
        data.append("publication",event.target.publication.value);
        data.append("dor",null);
      
       console.log(data);
       fetch("http://localhost:4000/api/admin/book/add", {
        method: 'POST' ,
        headers: {
          // "Content-Type": "application/json; charset=utf-8",
          "Content-Type": "application/x-www-form-urlencoded",
      }, 
       body:data.toString()  
       }).then(response=>response.json())
       .then(data=>{handleData(data)});
        
    }
    return <div >
        <Navigation />
        <div className="sign-up-form">
        <form onSubmit={handleSubmit} >
        <FormComponent name="ISBN" placeholder="eg 1234" postName="number" full="yes"/>
        <FormComponent name="Book Name" placeholder="eg Memoirs" postName="bookName" full="yes"/>
        <FormComponent name="Author" placeholder="eg Conan Doyle" postName="author" full="yes"/>
        <FormComponent name="Category" placeholder="eg Mystery" postName="category" full="yes"/>
        <FormComponent name="Publication" placeholder="eg abc" postName="publication" full="yes"/>
        <button type ="submit" className="btn btn-lg btn-success" >Add</button>
        </form>
        <br/>
        <h5>{bookStat}</h5>
        </div>
        <Footer />
    </div>
}

export default AdminBook;