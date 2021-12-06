import React from "react"
import UniversityLogo from "./UniversityLogo.png"

function Footer(){
    var year=new Date().getFullYear();
 return <div className="full-footer" >
        <div className="card-container row">
            <div className="card col-sm-4" >
                
                <div className="card-body">
                <h5 className="card-title"><img src={UniversityLogo} alt="uni-logo" height="40" width="40"/>Lorem University</h5>
           <p className="card-text">Lorem ipsum dolor sit amet. Aut nulla numquam qui facere voluptatem quo </p>

                </div>
            </div>
            <div className="card col-sm-4" >
               
                <div className="card-body">
                <h5 className="card-title">Follow Us</h5>
           <p className="card-text"></p>

                </div>
            </div>
            <div className="card col-sm-4" >
                
                <div className="card-body">
                <h5 className="card-title">Visit Us</h5>
           <p className="card-text">Sed quidem facilis et ullam, consequuntur aut dolorem, ipsam ea inventore:12345</p>
                </div>
            </div>

        </div>
      
      <div  id="copyright">
        <p> Copyright © {year} Sonali Jeswani</p>
</div>
     </div>
 
}

export default Footer;