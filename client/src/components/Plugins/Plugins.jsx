
import {store} from "../StateProvider/StateProvider";
import React, {useContext} from 'react';
import * as APIHandler from "../../api/apiHandler";


 const Plugins = (plugins) => {
  const { state, dispatch } = useContext(store);
   return (
     <div>
       <center><h1>Plugins</h1></center>

       {state.plugins.map((plugin) => (
         <div styles>
           <div class="card-body">
             <h5 class="card-title">{plugin.name}</h5>
             <h6 class="card-subtitle mb-2 text-muted">{plugin.version}</h6>
             <p class="card-text">{plugin.descritpion}</p>
           </div>
         </div>
       ))}
     </div>
   )
 };
 const styles =  {
  card:{
    display:'block'
  }
};
 export default Plugins