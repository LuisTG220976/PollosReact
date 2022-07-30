import React from 'react';
import logo1 from "../assets/precio1.jpg";
import logo2 from "../assets/precio2.jpg";
import logo3 from "../assets/precio3.jpg";
import logo4 from "../assets/precio4.jpg";
import logo5 from "../assets/precio5.jpg";
import logo6 from "../assets/precio6.jpg";

export default function Promociones() {
  return (
    <div>
        <section class="promociones" id="promos">               
               <div class="contenedor">
                   <h2>PROMOCIONES</h2>
                   <img src={logo1} alt="" class="img-promos"/>
                   <img src={logo2} alt="" class="img-promos"/>
                   <img src={logo3} alt="" class="img-promos"/>
                   <img src={logo4} alt="" class="img-promos"/>
                   <img src={logo5} alt="" class="img-promos"/>
                   <img src={logo6} alt="" class="img-promos"/>
                  
               </div>            
       </section>
    </div>
  )
}
