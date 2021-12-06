import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer"

function About(){
    return <div>
    <Navigation />
    <div className="container-Fluid about-custom">
     
       <h1>About Us</h1>
       <h3>Library At a Glance</h3>
       <p>Lorem ipsum dolor sit amet. Sit sint dolor a voluptatem rerum a accusantium libero et fugiat ullam sed autem placeat eum ullam quas. Quo quia necessitatibus qui porro internos sit voluptas ipsam 33 sint aliquid qui doloremque minima.</p>
       <h3>Collections</h3>
       <p>Lorem ipsum dolor sit amet. Rem voluptatem sequi vel nemo tempora ex nihil exercitationem ut dolorem distinctio. Et aperiam quia eos enim aliquid ea sequi dolorem sed quia iste et repudiandae voluptas et molestiae autem. In quia quidem aut esse rerum eos sint magni cum autem iusto sit accusamus tempora in nisi cupiditate. Est repudiandae quia et illum inventore aut quas pariatur id sunt quia et quae sapiente in labore voluptatem!</p>
       <ul>
           <li>Ut doloremque Quis qui fugit eius</li>
           <li>A enim quas ea tempora iste eos atque deserunt</li>
           <li>Et praesentium aliquam est adipisci quas ea quibusdam voluptatibus</li>
       </ul>
    </div>
    <Footer/>
    </div>
}

export default About;