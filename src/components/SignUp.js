import React from "react"
import FormComponent from "./FormComponent";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Switch,Route, Link , useNavigate} from 'react-router-dom';

function Signup(){
  const navigate=useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    function handleData(data){
      
      console.log(data.dataEntry);
      if(data.dataEntry=="Success"){
         console.log("im in if");
         navigate("/user/"+event.target.UserID.value);
         //<Navigate to={"/browse"} replace={true} />
        }else{
          console.log("DO it Again");
      }
    }
    console.log(event.target.FirstName.value);
      var data=new URLSearchParams();
      data.append("UserID",event.target.UserID.value);
      data.append("password",event.target.password.value);
      data.append("FirstName",event.target.FirstName.value);
      data.append("LastName",event.target.LastName.value);
      data.append("Email",event.target.Email.value);
      data.append("PhoneNum",event.target.PhoneNum.value);
    
     console.log(data);
     fetch("http://localhost:4000/api/user", {
      method: 'POST' ,
      headers: {
        // "Content-Type": "application/json; charset=utf-8",
        "Content-Type": "application/x-www-form-urlencoded",
    }, 
     body:data.toString()  
     }).then(response=>response.json())
     .then(data=>{handleData(data)});
    // const requestOptions={
    //   method:"POST",
    //   headers:{"Content-type":"application/json"},
    //   body:JSON.stringify({
        
    //   })
    // }
    // fetch("http://localhost:4000/api/user", { method: 'POST' })
    // .then(data => data.json()) 
    // .then(json => { populateBooks([...json])})
  }

    return <div>
        <Navigation />
        <div className="sign-up-form">
     
      <h2>Register</h2>
      <form onSubmit={handleSubmit} >
      <div className="signup-row">
        <FormComponent postName="FirstName" name="First Name" placeholder="eg Sonali" full="no" />
        <FormComponent postName="LastName" name="Last Name" placeholder="eg Jeswani" full="no"/>
      </div>
      <FormComponent inputType="email" postName="Email" name="Email" placeholder="eg sonali@gmail.com" full="yes"/>
      <div className="signup-row">      
      <FormComponent postName="PhoneNum" pattern="[1-9]{1}[0-9]{9}" name="Phone Number" title="Enter 10 digit number not starting with 0" placeholder="eg 1234567890" full="no"/>
      <FormComponent  postName="UserID" name="UserID" placeholder="C220161" full="no"/>
      </div>
         
      <FormComponent inputType="password" postName="password" name="Password" placeholder="password" full="no"/>
      
      
     
                <button type ="submit" className="btn btn-lg btn-success" >Sign Up</button>
                </form>
               
    </div>
    <Footer />
    </div> 

    
}

export default Signup;