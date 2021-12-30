import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {Link} from "react-router-dom"
function Adminn() {
    return <div>
        <Navigation />
        <Link to={"/signup"} >
        <button className="btn custom-button">Add Member</button>
                </Link>
        <Link to={"/admin/addbook"}>
        <button className="btn custom-button">Add Book</button>
        </Link>
        <button className="btn custom-button">Delete Member</button>
        <button className="btn custom-button">Delete Book</button>
        <Footer />
    </div>
}
export default Adminn;