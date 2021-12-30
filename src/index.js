import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/App';
import Admin from './components/Admin'
import Contact from './components/ContactUs'
import About from './components/About'
import Browse from "./components/Browse"
import Signup from "./components/SignUp"
import User from "./components/User"
import SignIn from "./components/SignIn"
import Adminn from "./components/Adminn"
import Adminbook from "./components/Adminbook"
ReactDOM.render(

  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="/about" element={<About />} />
  <Route path="/admin" element={<Admin />} />
  <Route path="/contact" element={ <Contact />} />
  <Route path="/browse" element={<Browse />}/>
  <Route path="/signup" element={<Signup />}/>
  <Route path="/user/:identity" element={<User />}/>
  <Route path="/signIn" element={<SignIn />}/>
  <Route path="/admin/add" element={<Adminn />}/>
  <Route path="/admin/addbook" element={<Adminbook />}/>
  </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);

