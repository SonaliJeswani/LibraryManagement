import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
function Contact(){
    return <div>
    <Navigation />
    <div className="contact-custom">
        <h1>Get in touch!</h1>

        <form className="" action="mailto:sonalijes0@gmail.com">
            
            <input className="contact-element" type="text" name="fullName" placeholder="Enter Name"/>
            <br />
            
            <input className="contact-element" type="email" name="email" placeholder="Enter Email"/>
            <br />
            <textarea className="contact-element" rows="4" cols="50" name="message" placeholder="Your message"/>
            <br />
            <button type="submit" className="btn btn-lg btn-success submit-button">Submit</button>
            
        </form>
    </div>
    <Footer />
    </div>
}

export default Contact;