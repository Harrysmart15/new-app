import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title , styles ,children}) {

    const history = useHistory();
    return(
     <div> 
        <div>
       
      <div className="nav-styles">
         <span>
            <button 
            className="nav-button"
            onClick={()=>history.push("/add/user")}
            >Add user</button>
         </span>
         <span>
            <button 
            className="nav-button"
            onClick={()=>history.push("/")}
            >Dashboard</button>
         </span>
       </div>
      <div className="title">{title}</div>
      </div>


      <div className="children"> 
      {children}
      
      <footer>
           <h1>Here We To Help(❁´◡`❁)</h1>
           <div className="dot">Contact US
           <div>📧 : Bello-ciao@gmail.com</div>
           <div>📞 : 8778161679</div>
           <div>◧ : money_heist</div>
           <img src="https://wallpapers.com/images/featured/segtwbhffwy01w82.jpg"></img>
           
           
           </div>


      </footer>
      
      
      </div>



     </div>
    )
}