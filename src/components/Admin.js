import React , {useState} from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {  useNavigate } from "react-router-dom";
import FormComponent from "./FormComponent";


function Admin(){
    const navigate=useNavigate();
    const [info,setInfo]=useState("");
    
    function handleSignIn(event) {
        event.preventDefault();
        // function handleData(data) {
        
        //     if(data.userID=="C0"){
        //         setInfo("Username or password do not match");
        //     }else{
        //         setInfo("");
        //         navigate("/user/"+event.target.username.value);
                
        //     }
        // }
        // const userName=event.target.username.value;
        // const password=event.target.password.value;
        // fetch("http://localhost:4000/api/user/"+userName+"/"+password, { method: 'GET' })
        // .then(data => data.json()) 
        // .then(json => {handleData(json)})
        function handle(data) {
            console.log(data.foundAdmin);
            if(data.foundAdmin==="Yes"){
                 setInfo("");
                 navigate("/admin/add");
            }else{
                setInfo("Id or password do not match");
            }
        }
        const userName=event.target.identity.value;
        const password=event.target.password.value; 
        console.log(userName);
        console.log(password);
        fetch("http://localhost:4000/api/admin/"+userName+"/"+password, { method: 'GET' })
        .then(data => data.json()) 
        .then(json => {handle(json)})
        
    }

    return <div className="sign-in-form">
    <Navigation />
    <div >
       <div>
       <h1>Sign In</h1>
       <form onSubmit={handleSignIn}>
       <div className="background">
        <h6>Admin id </h6>
        <FormComponent postName="identity" full="yes"/>
        </div>
        <div className="background">
        <h6>Password </h6>
        <FormComponent inputType="password" postName="password" full="yes" />
        </div>
        <p>{info}</p>
        <button className="btn btn-lg btn-success">Submit</button>
        </form>
        </div>
    </div>
    <Footer />
    </div> 
}

export default Admin;