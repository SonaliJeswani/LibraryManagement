import React,{useState} from "react";
import {  useNavigate } from "react-router-dom";
import FormComponent from "./FormComponent";
import Navigation from "./Navigation";
import Footer from "./Footer";

function SignIn() {
    const navigate=useNavigate();
    const [info,setInfo]=useState("");
    
    function handleSignIn(event) {
        event.preventDefault();
        function handleData(data) {
        
            if(data.userID=="C0"){
                setInfo("Username or password do not match");
            }else{
                setInfo("");
                navigate("/user/"+event.target.username.value);
                
            }
        }
        const userName=event.target.username.value;
        const password=event.target.password.value;
        fetch("http://localhost:4000/api/user/"+userName+"/"+password, { method: 'GET' })
        .then(data => data.json()) 
        .then(json => {handleData(json)})
        
    }

    return <div className="sign-in-form">
    <Navigation />
    <div >
       <div>
       <h1>Sign In</h1>
       <form onSubmit={handleSignIn}>
       <div className="background">
        <h6>Username </h6>
        <FormComponent postName="username" full="yes"/>
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

export default SignIn;